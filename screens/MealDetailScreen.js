import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const MealDetailScreen = ({ navigation, route }) => {

  const meal = route.params.item;

  const image = { uri: meal.img };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.item.title,
    });

  }, [navigation]);

  return (
    <View style={{
      margin: 15,
    }}>
      <ImageBackground source={image} style={styles.image} >
        <Text style={{
          color: "#fff", fontSize: 18, textAlign: "center", position: "absolute",
          bottom: 0,
          backgroundColor: "teal",
          padding: 5,
          width: "100%"
        }}>{meal.title}</Text>
      </ImageBackground>
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'left', }}>Ingredients</Text>
        <Text>{meal.ingredients}</Text>
      </View>
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'left' }}>Reciepe</Text>
        <Text>{meal.reciepe}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 20,
  },
  container : {
    marginVertical:10
  }
});

export default MealDetailScreen;
