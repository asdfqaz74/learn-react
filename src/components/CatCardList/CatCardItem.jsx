import classes from './CatCardItem.module.css';
import { getStaticImage } from '../../utils/getStaticAsset';

function CatCardItem({ cat: { imageAlt, imageSrc, name, badges, birthday } }) {
  return (
    <article className={classes.CatCard}>
      <header>
        <img src={getStaticImage(imageSrc)} alt={imageAlt} />
        <h2>{name}</h2>
        <p className={classes.birthday}>태어난 날: {birthday}</p>
      </header>
      <ul className={`${classes.badgeList} ${classes.golden}`}>
        {badges.map((badge) => (
          <li key={badge.slug}>{badge.label}</li>
        ))}
      </ul>
    </article>
  );
}

export default CatCardItem;
