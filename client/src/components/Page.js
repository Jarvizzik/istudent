import React, { Component } from 'react';

export class Page extends Component {

  render() {

    return (
      <div id={this.props.id} style={{ width: "210mm", height: this.props.singleMode ? "297mm" : "" }}>
        {this.props.children}
      </div>
    );
  }
}