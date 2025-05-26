import styles from './FeaturedPosts.module.css';
import img1 from '../assets/unsplash_1.png';
import img2 from '../assets/unsplash_2.png';
import img3 from '../assets/unsplash_3.png';


const posts = [
  {
    id: 1,
    isNew: true,
    title: 'Loudest à la Madison #1 (L’Integral)',
    categories: ['English', 'Marketing', 'News'],
    date: '22 April 2021',
    comments: 10,
    image: img1, 
  },
  {
    id: 2,
    isNew: true,
    title: 'Loudest à la Madison #1 (L’Integral)',
    categories: ['English', 'Marketing', 'News'],
    date: '22 April 2021',
    comments: 8,
    image: img2,
  },
  {
    id: 3,
    isNew: true,
    title: 'Loudest à la Madison #1 (L’Integral)',
    categories: ['English', 'Marketing', 'News'],
    date: '22 April 2021',
    comments: 12,
    image: img3,
  },
];

export default function FeaturedPosts() {
  return (
    <section className={styles.wrapper}>
      <p className={styles.label}>Practice Advice</p>
      <h2 className={styles.heading}>Featured Posts</h2>

      <div className={styles.grid}>
        {posts.map((post) => (
          <div className={styles.card} key={post.id}>
            <div className={styles.imageWrapper}>
              <img src={post.image} alt={post.title} />
              {post.isNew && <span className={styles.badge}>NEW</span>}
            </div>

            <div className={styles.body}>
              <div className={styles.categories}>
                {post.categories.map((cat, i) => (
                  <span key={i} className={styles.category}>
                    {cat}
                  </span>
                ))}
              </div>

              <h4 className={styles.title}>{post.title}</h4>

              <div className={styles.meta}>
                <span>{post.date}</span>
                <span>{post.comments} comments</span>
              </div>

              <a href="#" className={styles.link}>Learn More &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
