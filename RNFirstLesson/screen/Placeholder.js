import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';

const Placeholder = ({navigation}) => {
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
    <View style={styles.userItem}>
      <Text style={styles.email}>{item.name}</Text>
      <Text>{item.email}</Text>
      <View style={styles.btnContainer}>
        <Button
          title="View detail"
          onPress={() => navigation.navigate('Detail', {id: item.id})}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Placeholder Screen</Text>
      <FlatList
        style={styles.users}
        data={users}
        renderItem={renderItem}
        keyExtractor={user => user.id}
      />
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

export default Placeholder;
