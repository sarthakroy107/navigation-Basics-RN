/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Details = ({product}: Product) => {
  return (
    <View>
      <Text style={styles.smallText}>Details</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
    smallText:{
        color: 'black',
    },
});