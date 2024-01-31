import { useState } from 'react';

function Topping({ types, name, onChange, isChecked }) {
  return (
    <div>
      <input
        type="checkbox"
        id={types}
        name={types}
        value={types}
        onChange={onChange}
        checked={isChecked}
      />
      <label htmlFor={types}>{name}</label>
    </div>
  );
}

export default function Exercise() {
  const [images, setImages] = useState({
    pepperoni: false,
    cheese: false,
    pineapple: false,
    olive: false,
  });

  const handleImg = (e) => {
    const { name, checked } = e.target;
    setImages({ ...images, [name]: checked });
  };

  return (
    <>
      <Topping
        types="pepperoni"
        name="페퍼로니"
        onChange={handleImg}
        isChecked={images.pepperoni}
      />
      <Topping
        types="cheese"
        name="치즈"
        onChange={handleImg}
        isChecked={images.cheese}
      />
      <Topping
        types="pineapple"
        name="파인애플"
        onChange={handleImg}
        isChecked={images.pineapple}
      />
      <Topping
        types="olive"
        name="올리브"
        onChange={handleImg}
        isChecked={images.olive}
      />
      <div style={{ position: 'relative' }}>
        <img src="/images/pizza.png" alt="" style={{ position: 'absolute' }} />
        <img
          src="/images/pepperoni.png"
          alt=""
          style={{
            position: 'absolute',
            width: '500px',
            display: images.pepperoni ? 'block' : 'none',
          }}
        />
        <img
          src="/images/cheese.png"
          alt=""
          style={{
            position: 'absolute',
            width: '500px',
            display: images.cheese ? 'block' : 'none',
          }}
        />
        <img
          src="/images/pineapples.png"
          alt=""
          style={{
            position: 'absolute',
            width: '500px',
            display: images.pineapple ? 'block' : 'none',
          }}
        />
        <img
          src="/images/olive.png"
          alt=""
          style={{
            position: 'absolute',
            width: '500px',
            display: images.olive ? 'block' : 'none',
          }}
        />
      </div>
    </>
  );
}
