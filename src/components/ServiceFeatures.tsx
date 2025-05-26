import styles from './ServiceFeatures.module.css';
import { FaThumbsUp, FaBuilding, FaRocket } from 'react-icons/fa';

const features = [
  {
    icon: <FaThumbsUp size={32} color="#23856d" />,
    title: 'Easy Wins',
    description: 'Get your best looking smile now!',
  },
  {
    icon: <FaBuilding size={32} color="#23856d" />,
    title: 'Concrete',
    description: 'Defalcate is most focused in helping you discover your most beautiful smile.',
  },
  {
    icon: <FaRocket size={32} color="#23856d" />,
    title: 'Hack Growth',
    description: 'Overcame any hurdle or any other problem.',
  },
];

export default function ServiceFeatures() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Featured Products</h2>
      <h3 className={styles.subheading}>THE BEST SERVICES</h3>
      <p className={styles.description}>
        Problems trying to resolve the conflict between
      </p>

      <div className={styles.grid}>
        {features.map((item, index) => (
          <div className={styles.card} key={index}>
            {item.icon}
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
