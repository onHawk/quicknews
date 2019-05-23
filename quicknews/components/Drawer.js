import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

import { Container, Content, ListItem, Header } from 'native-base';

import { withNavigation } from 'react-navigation';

const routes = ['Headlines', 'Sources'];

class DrawerComp extends Component {
  render() {
    return (
      <Container>
        <View
          style={{
            height: 30,
            backgroundColor: '#ffffff',
            alignItems: 'stretch',
          }}
        >
          <Text>Drawer</Text>
        </View>

        <Content padder>
          <FlatList
            data={routes}
            renderItem={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.item)}
                  style={{ padding: 5 }}
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
