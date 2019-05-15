import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import { Container, Header } from 'native-base';

import Articles from '../Articles';

class Entertainment extends Component {
  state = {
    articles: [],
    refresh: true,
  };

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    const url =
      'https://newsapi.org/v2/top-headlines?' +
      'category=entertainment&country=us&' +
      'apiKey=ef49c93e09c542b98132457198e197ed';

    const req = new Request(url);
    return fetch(req)
      .then(response => response.json())
      .then(promise => {
        this.setState({
          articles: promise.articles,
          refresh: !this.state.refresh,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <FlatList
        ref="ent"
        data={this.state.articles}
        renderItem={({ item }) => <Articles article={item} />}
        refreshing={this.state.refresh}
        onRefresh={() => this.toRefresh}
      />
    );
  }
}

export default Entertainment;
