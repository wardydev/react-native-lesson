import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>This is home screen</Text>
      <Button
        title="Go to flatlist screen"
        onPress={() => navigation.navigate('Flat')}
      />
    </View>
  );
};

export default Home;
