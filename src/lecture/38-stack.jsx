import { useId, useState } from 'react';
import { Stack } from '@/components';

// 캐릭터 상태
const CHARACTER = {
  gender: '남자,여자'.split(','),
  clothes: '모자,상의,하의,신발'.split(','),
};

// 캐릭터 초기 상태
const INITIAL_STATE = {
  gender: CHARACTER.gender[0],
  clothes: [],
  isAllSelected: false,
};

function MyCharacterForm() {
  const [characterState, setCharacterState] = useState(INITIAL_STATE);
  const [renderCharacter, setRenderCharacter] = useState(false);

  const handleChangeGender = (e) => {
    const { value } = e.target;
    const nextCharacterState = {
      ...characterState,
      gender: value,
    };

    setRenderCharacter(false);
    setCharacterState(nextCharacterState);
  };

  const handleSelectedAllClothes = (e) => {
    const { checked } = e.target;

    const nextCharacterState = {
      ...characterState,
      isAllSelected: checked,
      clothes: checked ? CHARACTER.clothes : [],
    };

    setCharacterState(nextCharacterState);
  };

  const handleChangeClothes = (e) => {
    const { value: clothes, checked: isChecked } = e.target;

    let nextClothes = [];

    if (isChecked) {
      nextClothes = [...characterState.clothes, clothes];
    } else {
      nextClothes = characterState.clothes.filter((i) => i !== clothes);
    }

    const hasFullClothes = nextClothes.length === CHARACTER.clothes.length;

    const nextCharacterState = {
      ...characterState,
      clothes: nextClothes,
      isAllSelected: hasFullClothes,
    };

    setRenderCharacter(false);
    setCharacterState(nextCharacterState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRenderCharacter(true);
  };

  const handleReset = () => {
    setCharacterState(INITIAL_STATE);
    setRenderCharacter(false);
  };

  const renderCharacterImage = () => {
    if (!renderCharacter) return null;
    return (
      <>
        {characterState.gender === '남자' && (
          <CharacterImage
            name="남자"
            width={'600px'}
            top={'45px'}
            left={'30px'}
          />
        )}
        {characterState.gender === '여자' && (
          <CharacterImage
            name="여자"
            width={'600px'}
            top={'45px'}
            left={'30px'}
          />
        )}
        {characterState.clothes.includes('상의') && (
          <CharacterImage
            name="상의"
            width={'550px'}
            top={'55px'}
            left={'20px'}
          />
        )}
        {characterState.clothes.includes('하의') && (
          <CharacterImage
            name="하의"
            width={'550px'}
            top={'55px'}
            left={'20px'}
          />
        )}
        {characterState.clothes.includes('신발') && (
          <CharacterImage
            name="신발"
            width={'450px'}
            top={'94px'}
            left={'70px'}
          />
        )}
        {characterState.clothes.includes('모자') && (
          <CharacterImage
            name="모자"
            width={'600px'}
            top={'13px'}
            left={'15px'}
          />
        )}
      </>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <h3>캐릭터의 성별을 선택하세요</h3>
        {CHARACTER.gender.map((i) => (
          <FormSelect
            name="gender"
            key={i}
            value={i}
            checked={characterState.gender === i}
            onChange={handleChangeGender}
            ischecked={i}
          >
            {i}
          </FormSelect>
        ))}

        <h3>입힐 옷을 고르세요</h3>
        <FormSelect
          checkbox
          checked={characterState.isAllSelected}
          onChange={handleSelectedAllClothes}
        >
          전체 선택
        </FormSelect>
        {CHARACTER.clothes.map((i) => (
          <FormSelect
            checkbox
            key={i}
            value={i}
            checked={characterState.clothes.includes(i)}
            onChange={handleChangeClothes}
            ischecked={i}
          >
            {i}
          </FormSelect>
        ))}
        <Stack my={20}>
          <button type="submit">옷입히기</button>
          <button type="reset">되돌리기</button>
        </Stack>
      </form>
      <div style={{ position: 'relative' }}>
        <CharacterImage name="box" />
        {renderCharacterImage()}
      </div>
    </>
  );
}

function CharacterImage({ name, ...restStyles }) {
  const styles = {
    position: 'absolute',
    ...restStyles,
  };

  return (
    <img src={`/images/character/${name}.png`} alt={name} style={styles} />
  );
}

// checkbox 또는 radio 고르기
function FormSelect({ checkbox = false, children, ...restProps }) {
  const id = useId();
  const type = checkbox ? 'checkbox' : 'radio';
  return (
    <div>
      <input type={type} id={id} {...restProps} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}

export default function Exercise() {
  return <MyCharacterForm />;
}
