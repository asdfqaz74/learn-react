import classes from './36-1-lifting-state-up.module.css';
import { useState } from 'react';
import { A11yHidden } from '@/components';

function CatchMole() {
  const headlineId = crypto.randomUUID();

  const [openedPanelIndex, setOpenedPanelIndex] = useState(0);

  const handleOpenPannel = () => {
    const panelCount = 3;
    const randomIndex = Math.floor(Math.random() * panelCount);
    setOpenedPanelIndex(randomIndex);
  };

  return (
    <article className={classes.Accordion} aria-labelledby={headlineId}>
      <A11yHidden as="h2" id={headlineId}>
        아코디언을 사용해 컴포넌트 간 상태 공유
      </A11yHidden>
      <Mole
        index={0}
        isOpen={openedPanelIndex === 0}
        onToggle={handleOpenPannel}
      >
        <img src="/images/두더지.png" style={{ height: '100px' }} alt="" />
      </Mole>
      <Mole
        index={1}
        isOpen={openedPanelIndex === 1}
        onToggle={handleOpenPannel}
      >
        <img src="/images/두더지.png" style={{ height: '100px' }} alt="" />
      </Mole>
      <Mole
        index={2}
        isOpen={openedPanelIndex === 2}
        onToggle={handleOpenPannel}
      >
        <img src="/images/두더지.png" style={{ height: '100px' }} alt="" />
      </Mole>
    </article>
  );
}

function Mole({ isOpen = false, index, onToggle, children, ...restProps }) {
  const handleClick = () => {
    if (!isOpen) {
      alert('game over!');
    }
    onToggle(index);
  };

  return (
    <div className={classes.AccordionPanel} {...restProps}>
      <button type="button" style={{ cursor: 'pointer' }} onClick={handleClick}>
        {isOpen ? '여깄다!' : '숨었다!'}
      </button>
      <div hidden={!isOpen}>{children}</div>
    </div>
  );
}

export default function Exercise() {
  return (
    <div>
      <h2>두더지잡기</h2>
      <CatchMole />
    </div>
  );
}
