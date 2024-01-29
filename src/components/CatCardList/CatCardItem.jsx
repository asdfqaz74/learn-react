import classes from './CatCardItem.module.css';
import { getStaticImage } from '../../utils/getStaticAsset';
import convertDayFormat from '../../utils/convertDayFormat';

function CatCardItem({ cat: { imageAlt, imageSrc, name, badges, birthday } }) {
  let renderBadges = null;

  // if 문
  if (badges.length > 0) {
    // for 문
    const renderBadgeList = badges.map((badge) => (
      <li key={badge.slug}>{badge.label}</li>
    ));

    renderBadges = (
      <ul className={`${classes.badgeList} ${classes.golden}`}>
        {renderBadgeList}
      </ul>
    );
  }

  return (
    <article className={classes.CatCard}>
      <header>
        <img src={getStaticImage(imageSrc)} alt={imageAlt} />
        <h2>{name}</h2>
        <p className={classes.birthday}>
          태어난 날: {convertDayFormat(birthday)}
        </p>
      </header>
      {renderBadges}
    </article>
  );
}

export default CatCardItem;
