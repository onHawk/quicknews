import React, { Component } from 'react';

import { StyleSheet, Text, View, Button, FlatList, Header } from 'react-native';

import { Container, Content, List, ListItem } from 'native-base';

class SourceList extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Text>source 1</Text>
            </ListItem>
            <ListItem>
              <Text>source 2</Text>
            </ListItem>
            <ListItem>
              <Text>source 3</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default SourceList;
