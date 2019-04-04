import React, { Component } from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

class Articles extends Component {
  render() {
    console.log(this.props.articles);
    return (
      <View>
        <Text>something</Text>
      </View>
    );
  }
}

export default Articles;
