import DesktopShopCard from './DesktopShopCard';
import Navbar from './Navbar';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.container}>
      <Navbar />
      <DesktopShopCard />
    </div>
  );
}
