import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>This is home screen</Text>
      <View style={styles.containerBtn}>
        <Button
          title="Go to flatlist screen"
          onPress={() => navigation.navigate('Flat')}
        />
      </View>
      <View style={styles.containerBtn}>
        <Button
          title="Go to User screen"
          onPress={() => navigation.navigate('Placeholder')}
        />
      </View>
      <View style={styles.containerBtn}>
        <Button
          title="Go to Posts screen"
          onPress={() => navigation.navigate('Posts')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBtn: {
    marginTop: 8,
  },
});

export default Home;
