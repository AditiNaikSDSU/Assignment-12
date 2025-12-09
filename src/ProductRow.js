import React from 'react';

class ProductRow extends React.Component {
  constructor(props) {
    super(props);

    this.destroy = this.destroy.bind(this);
  }

  destroy() {
    this.props.onDestroy(this.props.product.id);
  }

  render() {
    const product = this.props.product;

    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td className="text-end">
          <button
            type="button"
            className="btn btn-info btn-sm"
            onClick={this.destroy}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductRow;
