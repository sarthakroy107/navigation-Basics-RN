/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
const {width} = Dimensions.get('window');
import { PRODUCTS_LIST } from '../data/constants';
const Home = ({navigation}: undefined) => {
    const productView = (item: any) => {
        console.log(item.item);
        return (
            <Pressable onPress={()=>navigation.navigate('Details', {
                product: item.item,
            })}>
            <View style={styles.container}>
                <Image style={styles.imageContainer} source={{uri: item.item.imageUrl}} />
                <View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', backgroundColor: 'green', padding:2, margin:3, paddingHorizontal:6, borderRadius:3}}>{item.item.rating}</Text>
                        <Text style={styles.smailText}>({item.item.ratingCount})</Text>
                    </View>
                </View>
            </View>
            </Pressable>
        );
    };

  return (
    <View>
      <FlatList
      data={PRODUCTS_LIST}
      renderItem={productView}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    container:{
        marginTop:5,
        width: width,
        flexDirection:'row'
    },
    smailText:{
        fontSize:20,
        color:'#000',
    },
    imageContainer:{
        width:125,
        height:150,
        objectFit:'contain',
    },
});
