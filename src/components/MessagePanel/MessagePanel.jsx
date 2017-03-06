import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Panel from '../Panel/Panel.jsx';
import MessageMenuBar from '../MessageMenuBar/MessageMenuBar.jsx';
import MessageList from '../MessageList/MessageList.jsx';
import InputBar from '../InputBar/InputBar.jsx';

import './MessagePanel.css';

export class MessagePanelComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <div id="message-panel" className="panel">
        <div className="top container">
          <MessageMenuBar />
          <MessageList />
        </div>
        <div className="bottom container">
          <InputBar />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

const MessagePanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessagePanelComponent);

export default MessagePanel;
