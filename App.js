import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import FiltersScreen from './screens/FiltersScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { Button, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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
        <Stack.Screen name="Meal Categories" component={CategoriesScreen}
          options={{
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: 'teal'
            },
            headerLeft: () => (
              <View style={{ marginHorizontal: 20 }}>
                <AntDesign name="bars" size={24} color="#fff" onPress={() => alert("hello")} />
              </View>
            )
          }}
        />
        <Stack.Screen name="Category Meals" component={CategoryMealsScreen}
          options={{
            title: "Category Meals Screen",
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: 'teal'
            },
          }}
        />
        <Stack.Screen name="Favourites" component={FavouritesScreen}
          options={headerStyle}
        />
        <Stack.Screen name="Filters" component={FiltersScreen}
          options={headerStyle}
        />
        <Stack.Screen name="Meal Detail" component={MealDetailScreen}
          options={headerStyle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;