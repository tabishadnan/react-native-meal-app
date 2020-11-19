import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const GridMealItemScreen = ({ navigation, meal }) => {

    // console.log(meal);

    const image = { uri: meal.item.img };

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("Meal Detail", meal);
        }}>
            <View style={{
                flex: 1,
                margin: 15,
                alignItems: 'center',
                justifyContent: 'center',
                color: "#141823",
                height: 200,
                width: 325,
            }}>
                <ImageBackground source={image} style={styles.image} >
                    <Text style={{ color: "#fff", fontSize: 18, textAlign: "center", position: "absolute",
                    bottom:0,
                    backgroundColor:"teal",
                    padding:5,
                    width:"100%"
                }}>{meal.item.title}</Text>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: 10,
    }
});

export default GridMealItemScreen;