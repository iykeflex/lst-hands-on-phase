import styles from './DesktopShopCard.module.css';
import large from '../assets/desktopCardImage/large.png';
import plant from '../assets/desktopCardImage/plant.png';
import lamp from '../assets/desktopCardImage/lamp.png';
import vases from '../assets/desktopCardImage/vases.png';

const cards = [
  { image: large, title: 'FURNITURE', subtitle: '5 Items' },
  { image: plant, title: 'FURNITURE', subtitle: '5 Items' },
  { image: lamp, title: 'FURNITURE', subtitle: '5 Items' },
  { image: vases, title: 'FURNITURE', subtitle: '5 Items' },
];

export default function DesktopShopCard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        {/* Left Large Card */}
        <div className={`${styles.card} ${styles.large}`}>
          <img src={cards[0].image} alt="Plates" />
          <div className={styles.overlay}>
            <p className={styles.subtitle}>{cards[0].subtitle}</p>
            <h3 className={styles.title}>{cards[0].title}</h3>
            <a href="#">Read More</a>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.right}>
          
          {/* Top full-width */}
          <div className={`${styles.card} ${styles.top}`}>
            <img src={cards[1].image} alt="Plant" />
            <div className={styles.overlay}>
              <p className={styles.subtitle}>{cards[1].subtitle}</p>
              <h3 className={styles.title}>{cards[1].title}</h3>
              <a href="#">Read More</a>
            </div>
          </div>

          {/* Bottom two cards */}
          <div className={styles.row}>
            {[cards[2], cards[3]].map((card, i) => (
              <div className={styles.card} key={i}>
                <img src={card.image} alt={card.title} />
                <div className={styles.overlay}>
                  <p className={styles.subtitle}>{card.subtitle}</p>
                  <h3 className={styles.title}>{card.title}</h3>
                  <a href="#">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
