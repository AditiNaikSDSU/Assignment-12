import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleDestroy = this.handleDestroy.bind(this);
  }

  handleDestroy(id) {
    this.props.onDestroy(id);
  }

  render() {
    const productsArray = Object.keys(this.props.products).map(
      id => this.props.products[id]
    );

    const rows = [];

    productsArray.forEach(product => {
      if (
        this.props.filterText &&
        product.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1
      ) {
        return;
      }

      rows.push(
        <ProductRow
          product={product}
          key={product.id}
          onDestroy={this.handleDestroy}
        />
      );
    });

    return (
      <table className="table table-striped table-bordered mb-4">
        <thead className="table-dark">
          <tr>
            <th style={{ width: '40%' }}>Name</th>
            <th style={{ width: '30%' }}>Category</th>
            <th style={{ width: '20%' }}>Price</th>
            <th style={{ width: '10%' }}> </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
