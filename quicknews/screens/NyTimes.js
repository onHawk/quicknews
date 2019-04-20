import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import {
  Button,
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Body,
  Content,
} from 'native-base';

import Articles from '../components/Articles';

class NyTimes extends Component {
  state = {
    articles: [],
    refresh: true,
  };

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    const url =
      'https://newsapi.org/v2/everything?' +
      'domains=nytimes.com&' +
      'apiKey=ef49c93e09c542b98132457198e197ed';

    const req = new Request(url);
    return fetch(req)
      .then(response => response.json())
      .then(promise => {
        console.log(promise.articles);
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
    console.log(this.state.articles);
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => (
          <Articles article={item} navigation={this.props.navigation} />
        )}
        refreshing={this.state.refresh}
        onRefresh={() => this.toRefresh}
      />
    );
  }
}

export default NyTimes;
