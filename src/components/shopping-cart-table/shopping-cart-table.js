import { connect } from 'react-redux';
import './shopping-cart-table.css';

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, index) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{index + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            className="btn btn-outline-warning"
            onClick={() => onDecrease(id)}
          >
            Remove Item
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => onIncrease(id)}
          >
            Add Item
          </button>

          <button
            className="btn btn-outline-danger"
            onClick={() => onDelete(id)}
          >
            Delete All
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="shopping-cart-table">
      <h2>Your order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = () => {
  return {
    onIncrease: (id) => {
      console.log(`Increase ${id}`);
    },
    onDecrease: (id) => {
      console.log(`Decrease ${id}`);
    },
    onDelete: (id) => {
      console.log(`Delete ${id}`);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
