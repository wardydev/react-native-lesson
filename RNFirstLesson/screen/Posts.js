import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import useFetch from './hooks/useFetch';

const Posts = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const {data} = useFetch(url);

  const renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>This is posts</Text>
      {data ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={post => post.id}
        />
      ) : (
        <Text>Data not available</Text>
      )}
    </View>
  );
};

export default Posts;
