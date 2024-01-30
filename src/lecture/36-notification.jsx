import classes from './36-notification.module.css';

export function Plant({ theme, color, title, time, text }) {
  return (
    <div role="group" className={classes.box}>
      <div className={classes.theme} style={{ background: color }}>
        <img src={`/images/notification/${theme}.svg`} alt={theme} />
      </div>
      <div role="group" className={classes.innerBox}>
        <span className={classes.title} style={{ color: color }}>
          {title}
        </span>
        <span className={classes.text}>{text}</span>
        <span className={classes.time} style={{ color: color }}>
          {time}
        </span>
      </div>
    </div>
  );
}

function Exercise() {
  return (
    <>
      <Plant
        theme="plant"
        color="#22BE61"
        title="화초 관리"
        time="6분"
        text="화초에 물을 줄 시간입니다."
      />
      <Plant
        theme="food"
        color="#E39042"
        title="아이 식사"
        time="지금"
        text="아이에게 식사를 차려줄 시간입니다."
      />
    </>
  );
}

export default Exercise;
