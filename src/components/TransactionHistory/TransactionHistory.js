import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'

function TransactionHistory({ items }) {
    return (
<table className={styles.transactionHistory}>
  <thead>
    <tr className={styles.tableHead}>
      <th className={styles.tableHeadItem}>Type</th>
      <th className={styles.tableHeadItem}>Amount</th>
      <th className={styles.tableHeadItem}>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map(item => (
                   <tr key={item.id}>
      <td className={styles.tdItem}>{item.type}</td>
      <td className={styles.tdItem}>{item.amount}</td>
      <td className={styles.tdItem}>{item.currency}</td>
    </tr> 
                ))}
    
    </tbody>
</table>
    );
 };
 
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape),
};

export default TransactionHistory;