import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Header } from 'react-native';

import Articles from '../components/Articles';

class Homescreen extends Component {
  static navigationOptions = {
    headerTitle: 'Home',
    headerLeft: <Button title="nav" onPress={() => alert('clicked')} />,
  };

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
      'country=us&' +
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

  toRefresh() {
    this.setState({ refresh: true }, () => this.fetchNews());
  }
  render() {
    // console.log(this.state.articles);
    return (
      <View>
        <Button
          title="sources"
          onPress={() => this.props.navigation.navigate('SourceList')}
        >
          list of sources
        </Button>
        <FlatList
          data={this.state.articles}
          renderItem={({ item }) => (
            <Articles article={item} navigation={this.props.navigation} />
          )}
          refreshing={this.state.refresh}
          onRefresh={() => this.toRefresh}
        />
      </View>
    );
  }
}

export default Homescreen;
