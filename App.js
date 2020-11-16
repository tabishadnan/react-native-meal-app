import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import FiltersScreen from './screens/FiltersScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { round } from 'react-native-reanimated';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CategoriesScreen">
        <Stack.Screen name="Categories Screen" component={CategoriesScreen} />
        <Stack.Screen name="Category Meals Screen" component={CategoryMealsScreen}
          options={{
            title : "Category Meals Screen"
          }}
        />
        <Stack.Screen name="Favourites Screen" component={FavouritesScreen} />
        <Stack.Screen name="Filters Screen" component={FiltersScreen} />
        <Stack.Screen name="Meal Detail Screen" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;