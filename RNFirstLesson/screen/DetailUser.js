import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useFetch from './hooks/useFetch';

const DetailUser = ({route}) => {
  const {id} = route.params;
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const {data} = useFetch(url);

  return (
    <View style={styles.userItem}>
      <Text style={styles.email}>{data && data.name}</Text>
      <Text>{data && data.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    paddingHorizontal: 26,
  },
  users: {
    marginTop: 16,
  },
  userItem: {
    backgroundColor: 'lightgray',
    marginTop: 18,
    padding: 8,
  },
  email: {
    fontSize: 30,
    color: '#000000',
  },
  btnContainer: {
    marginTop: 12,
  },
});

export default DetailUser;
