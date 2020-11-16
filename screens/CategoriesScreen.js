import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { set } from 'react-native-reanimated';

import { CATEGORIES } from '../categories/Categories';

const CategoriesScreen = ({ navigation }) => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={(cat) => <View style={styles.container} onTouchStart={() => {
        navigation.navigate("Category Meals Screen", { ctitle : cat.item.title });
      }}>
        <Text>{cat.item.title}</Text>
      </View>}
      numColumns={2} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:150,
  },
});

export default CategoriesScreen;
