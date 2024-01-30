import classes from './33-avoid-bomb.module.css';

function Exercise() {
  return (
    <>
      <div>
        <div className={classes.game}>
          <button className={classes.ball} aria-label="공(ball)" />
          <button className="bomb" aria-label="폭탄(bomb)">
            <span role="img">💣</span>
          </button>
        </div>
        <div className="gameControls" role="group">
          <button type="button" aria-label="게임 시작" disabled>
            start
          </button>
          <button type="button" aria-label="게임 일시정지">
            pause
          </button>
        </div>
      </div>
    </>
  );
}

export default Exercise;
