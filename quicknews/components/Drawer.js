import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { Container, Content, Text, ListItem } from 'native-base';

import { withNavigation } from 'react-navigation';

const routes = ['Home', 'NyTimes', 'Sources'];

class DrawerComp extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <FlatList
            data={routes}
            renderItem={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.item)}
                >
                  <Text>{data.item}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

export default withNavigation(DrawerComp);
