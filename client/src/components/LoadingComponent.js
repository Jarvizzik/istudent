import React, { Component } from 'react';
import { ClipLoader } from 'react-spinners';

export class LoadingComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  loadingStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#f5f8fd',
    padding: '45vh 48vw'
  }

  render() {
    return (
      <div className='sweet-loading' style={this.loadingStyle}>
        <ClipLoader
          sizeUnit={"px"}
          size={25}
          color={'#78cc1f'}
          loading={this.state.loading}
        />
      </div>
    )
  }
}