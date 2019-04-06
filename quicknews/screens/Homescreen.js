import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import Articles from '../components/Articles';

class Homescreen extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    const url =
      'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=ef49c93e09c542b98132457198e197ed';

    const req = new Request(url);
    return fetch(req)
      .then(response => response.json())
      .then(promise => {
        this.setState({ articles: promise.articles });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    console.log(this.state.articles);
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Articles article={item} />}
      />
    );
  }
}

export default Homescreen;
