import styles from './Testimonials.module.css';
import img1 from '../assets/unsplash_G1.png';
import img2 from '../assets/unsplash_G7 (1).png';
import img3 from '../assets/unsplash_G7 (2).png';
import img4 from '../assets/unsplash_G7 (3).png';
import img5 from '../assets/unsplash_G7 (4).png';
import img6 from '../assets/unsplash_G7 (5).png';
import img7 from '../assets/unsplash_G6.png';

const testimonials = [
  {
    name: 'Regina Miles',
    role: 'Designer',
    message:
      'This is the best product I have used in years. Totally exceeded my expectations.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

const galleryImages = [img1, img2, img3, img4, img5, img6, img7];

export default function Testimonials() {
  const testimonial = testimonials[0];

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>What they say about us</h2>

      <div className={styles.testimonial}>
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className={styles.avatar}
        />
        <div className={styles.stars}>
          {'★'.repeat(testimonial.rating)}
          {'☆'.repeat(5 - testimonial.rating)}
        </div>
        <p className={styles.message}>"{testimonial.message}"</p>
        <p className={styles.name}>{testimonial.name}</p>
        <p className={styles.role}>{testimonial.role}</p>
      </div>

      <div className={styles.gallery}>
        {galleryImages.map((img, index) => (
          <img src={img} alt={`Gallery ${index + 1}`} key={index} />
        ))}
      </div>
    </section>
  );
}
