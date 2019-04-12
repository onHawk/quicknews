import React, { Component } from 'react';
import moment from 'moment';

import { withNavigation } from 'react-navigation';

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
      content,
    } = this.props.article;

    const published = moment(publishedAt).fromNow();
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
          <CardItem bordered>
            <Body>
              <Text>{description}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <TouchableOpacity
                style={styles.article}
                onPress={() => Linking.openURL(url)}
              >
                <Text>Full Article</Text>
              </TouchableOpacity>
            </Left>

            <Body>
              <Text style={styles.source}>{source.name}</Text>
              <Text>{published}</Text>
            </Body>
            <Right>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Content', {
                    article: content,
                  })
                }
              >
                <Text>read more</Text>
              </TouchableOpacity>
            </Right>
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
    borderRadius: 3,
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

export default withNavigation(Articles);
