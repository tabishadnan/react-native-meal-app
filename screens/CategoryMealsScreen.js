import React from 'react';
import { FlatList } from 'react-native';
import GridMealItemScreen from '../meals/GridMealItemScreen';
import { MEALS } from '../meals/MealsScreen';

const CategoryMealsScreen = ({ navigation, route }) => {

  const catId = route.params.item.id;

  const dMeal = MEALS.filter(meal => meal.catIds.indexOf(catId) >= 0 );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.item.title,
    });

  }, [navigation]);

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={dMeal}
      renderItem={(meal) => <GridMealItemScreen
        meal={meal}
        catId={catId}
        navigation={navigation}
      />}
      numColumns={1} />
  );
}

export default CategoryMealsScreen; 
