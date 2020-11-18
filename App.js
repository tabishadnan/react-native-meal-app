import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import FiltersScreen from './screens/FiltersScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createStackNavigator();

const headerStyle = {
  headerTintColor: "#ffffff",
  headerStyle: {
    backgroundColor: 'teal'
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CategoriesScreen">
        <Stack.Screen name="Categories Screen" component={CategoriesScreen}
          options={headerStyle}
        />
        <Stack.Screen name="Category Meals Screen" component={CategoryMealsScreen}
          options={{
            title: "Category Meals Screen",
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: 'teal'
            },
          }}
        />
        <Stack.Screen name="Favourites Screen" component={FavouritesScreen}
          options={headerStyle}
        />
        <Stack.Screen name="Filters Screen" component={FiltersScreen}
          options={headerStyle}
        />
        <Stack.Screen name="Meal Detail Screen" component={MealDetailScreen}
          options={headerStyle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;