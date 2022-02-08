import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Statistics({ title, stats }) {
    return (
<section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
 <ul className={styles.statList}>
    {stats.map(stat =>(
    <li className={styles.item} key={stat.id} style={{backgroundColor:`${getRandomHexColor()}`}}>
      <span className={styles.label}>{stat.label}</span>
      <span className={styles.percentage}>{stat.percentage}%</span>
    </li>
    ))}                  
  </ul>
</section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
   
};

export default Statistics;