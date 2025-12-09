import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.props.onFilter({
      [name]: value
    });
  }

  render() {
    return (
      <form className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          name="filterText"
          onChange={this.handleChange}
          value={this.props.filterText}
        />
      </form>
    );
  }
}

export default Filters;
