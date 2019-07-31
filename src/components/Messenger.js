import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../store/actions';

// import './general.scss';

class Messenger extends Component {

  constructor(props) {
    super(props);
    this.state = { title: 'App-shell', sender: 'Shell', message: '' };
    //console.log('props ', this.props.mainState);
  };

  render() {
    return (
      <div className="container">
        <h1>teste</h1>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return { mainState: state.mainReducer }
};

export default connect(mapStateToProps, actions)(Messenger);