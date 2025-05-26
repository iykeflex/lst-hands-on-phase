import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <h2>Bandage</h2>
          <div className={styles.socials}>
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
          </div>
        </div>

        <div className={styles.columns}>
          {[
            {
              title: 'Company Info',
              links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
            },
            {
              title: 'Legal',
              links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
            },
            {
              title: 'Features',
              links: ['Business Marketing', 'User Analytic', 'Live Chat', 'Unlimited Support'],
            },
            {
              title: 'Resources',
              links: ['IOS & Android', 'Watch a Demo', 'Customers', 'API'],
            },
          ].map((col, index) => (
            <div className={styles.column} key={index}>
              <h4>{col.title}</h4>
              {col.links.map((link, i) => (
                <a href="#" key={i}>
                  {link}
                </a>
              ))}
            </div>
          ))}

          <div className={styles.newsletter}>
            <h4>Get In Touch</h4>
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Made With ♥ By Flextech. All rights reserved.</p>
      </div>
    </footer>
  );
}
