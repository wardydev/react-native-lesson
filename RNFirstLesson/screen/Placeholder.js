import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const Placeholder = () => {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const renderItem = ({item}) => (
    <View>
      <Text style={styles.email}>{item.name}</Text>
      <Text>{item.email}</Text>
    </View>
  );

  return (
    <View>
      <Text>Placeholder Screen</Text>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={user => user.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  email: {
    fontSize: 30,
    color: '#000000',
  },
});

export default Placeholder;
