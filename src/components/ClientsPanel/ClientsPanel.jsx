import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../SearchBar/SearchBar.jsx';
import ClientList from '../ClientList/ClientList.jsx';
import './ClientsPanel.css';

// TODO: write a test for this
function filterChats (chats = [], query = '') {
  const lowerQuery = query.trim().toLowerCase();

  return chats.filter(chat => (
    `${chat.client.first_name.toLowerCase()} ${chat.client.last_name.toLowerCase()}`.includes(lowerQuery)
  ));
}

export class ClientsPanelComponent extends Component {
  static propTypes = {
    chats: PropTypes.array.isRequired,
  }

  state = {
    query: '',
    filteredChats: [],
  }

  onQueryChange = (event) => {
    const { chats } = this.props;
    const query = event.target.value;
    const filteredChats = filterChats(chats, query);

    this.setState({ query, filteredChats });
  }

  render () {
    const { query, filteredChats } = this.state;
    const chats = query.length > 0 ? filteredChats : this.props.chats;

    return (
      <div id="clients-panel" className="panel">
        <div className="top container">
          <SearchBar query={this.state.query} onQueryChange={this.onQueryChange} />
          <ClientList chats={chats} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chats: state.chat.chats,
});

const mapDispatchToProps = dispatch => ({

});

const ClientsPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientsPanelComponent);

export default ClientsPanel;
