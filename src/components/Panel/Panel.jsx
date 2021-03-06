import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


// DEPRECATED: Composition over Inheritence
export class PanelComponent extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  constructor (props) {
    super(props);

    this.state = {};
  }

  // getChildContext () {
  //   return { store: this.context.store };
  // }

  render () {
    const { children } = this.props;

    return (
      <div className="panel">
        {children}
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

const Panel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PanelComponent);

export default Panel;
