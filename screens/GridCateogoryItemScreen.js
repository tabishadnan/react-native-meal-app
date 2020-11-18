import React from 'react';
import { View, Text } from 'react-native';

const GridCateogoryItemScreen = ({ navigation, cat }) => {

    return (
        <View style={{
            flex: 1,
            backgroundColor: cat.item.color,
            margin:10,
            alignItems: 'center',
            justifyContent: 'center',
            color: "#141823",
            height: 150,
            borderWidth:2,
            borderRadius:20,
        }} onTouchStart={() => {
            navigation.navigate("Category Meals Screen", { ctitle: cat.item.title });
        }}>
            <Text style={{color : "#000000", fontSize:18,}}>{cat.item.title}</Text>
        </View>
    )
};

export default GridCateogoryItemScreen;