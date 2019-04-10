import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Linking,
} from 'react-native';

import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

class Articles extends Component {
  render() {
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url,
    } = this.props.article;

    // console.log(this.props.articles);
    return (
      <Content>
        <Card>
          <CardItem>
            <Text>{title}</Text>
          </CardItem>
          <CardItem>
            <Thumbnail style={styles.articleImg} source={{ uri: urlToImage }} />
          </CardItem>
          <CardItem>
            <Body>
              <Text>{description}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={styles.source}>{source.name}</Text>
              <TouchableOpacity
                style={styles.article}
                onPress={() => Linking.openURL(url)}
              >
                <Text>Full Article</Text>
              </TouchableOpacity>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  article: {
    backgroundColor: '#DDDDDD',
    padding: 8,
  },
  articleImg: {
    flex: 1,
    height: 200,
    borderRadius: 3,
  },
  source: {
    color: '#1E90FF',
  },
});
export default Articles;
