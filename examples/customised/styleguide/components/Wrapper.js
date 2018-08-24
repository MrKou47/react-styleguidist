import React, { Component } from 'react'
import { connect } from 'react-redux';

class Wrapper extends Component {
  render() {
    return React.cloneElement(this.props.children, { ...this.props });
  }
}

const mapState2Props = state => state;

export default connect(mapState2Props)(Wrapper);
// export default Wrapper;