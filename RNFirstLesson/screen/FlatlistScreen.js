import React from 'react';
import {View, FlatList, Text, Button, StyleSheet} from 'react-native';

const FlatlistScreen = ({navigation}) => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const renderItem = ({item}) => (
    <Text style={flatScreen.list}>{item.title}</Text>
  );

  return (
    <View>
      <Text style={flatScreen.textSize}>Flat List title</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={flatScreen.buttonContainer}>
        <Button
          title="Go to home screen"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

const flatScreen = StyleSheet.create({
  textSize: {
    fontSize: 30,
    color: 'black',
  },
  list: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 6,
    paddingLeft: 6,
    fontSize: 26,
    backgroundColor: 'gray',
    marginTop: 6,
  },
  buttonContainer: {
    marginTop: 28,
  },
});

export default FlatlistScreen;
