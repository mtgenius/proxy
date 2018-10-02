import React from 'react';
import reactn from 'reactn';
import './search.scss';

class Search extends React.PureComponent {

  state = {
    value: ''
  };

  static getDerivedStateFromProps(props, state) {
    if (
      props.name === '' ||
      state.value === props.name
    ) {
      return null;
    }
    return {
      value: props.name
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div className="search">
        <input
          onChange={this.handleChange}
          placeholder="Card Name"
          type="text"
          value={this.state.value}
        />
      </div>
    );
  }
}

export default reactn(Search);
