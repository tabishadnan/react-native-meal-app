import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../categories/Categories';
import GridCateogoryItemScreen from './GridCateogoryItemScreen';

const CategoriesScreen = ({ navigation }) => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={(cat) => <GridCateogoryItemScreen
        navigation={navigation}
        cat={cat}
      />}
      numColumns={2} />
  );
};

export default CategoriesScreen;
