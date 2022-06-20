import React from 'react';
import {View, Text} from 'react-native';

const DetailUser = ({route}) => {
  const {id} = route.params;
  return (
    <View>
      <Text>Detail User Screen</Text>
      <Text>UserID: {JSON.stringify(id)}</Text>
    </View>
  );
};

export default DetailUser;
