import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const GridCateogoryItemScreen = ({ navigation, cat }) => {

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("Category Meals Screen", { ctitle: cat.item.title });
        }}>
            <View style={{
                flex: 1,
                backgroundColor: cat.item.color,
                margin: 15,
                alignItems: 'center',
                justifyContent: 'center',
                color: "#141823",
                height: 150,
                width: 150,
                borderWidth: 2,
                borderRadius: 20,
            }}>
                <Text style={{ color: "#000000", fontSize: 18, }}>{cat.item.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default GridCateogoryItemScreen;