import css from 'components/transaction_history/TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.heading}>
        <tr>
          <th className={css.headingItem}>Type</th>
          <th className={css.headingItem}>Amount</th>
          <th className={css.headingItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.tableRow} key={id}>
            <td className={css.transactionItem}>{type}</td>
            <td className={css.transactionItem}>{amount}</td>
            <td className={css.transactionItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
