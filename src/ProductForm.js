import React from 'react';

const RESET_VALUES = { id: '', category: '', price: '', name: '' };

class ProductForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: Object.assign({}, RESET_VALUES),
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => {
      const product = Object.assign({}, prevState.product);
      product[name] = value;
      return { product };
    });
  }

  handleSave(e) {
    e.preventDefault();

    this.props.onSave(this.state.product);
    this.setState({
      product: Object.assign({}, RESET_VALUES),
      errors: {}
    });
  }

  render() {
    const { name, category, price } = this.state.product;

    return (
      <div className="mt-4">
        <h5 className="mb-3">Add a new product</h5>
        <form onSubmit={this.handleSave}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.handleChange}
              value={name}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              name="category"
              onChange={this.handleChange}
              value={category}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              onChange={this.handleChange}
              value={price}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default ProductForm;
