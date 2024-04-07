import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Cards from './Cards';
const AllCards = ({data}) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 10}}>
      <View className=" m-5">
        {data.map((item, index) => (
          <Cards
            key={index}
            sign={item.sign}
            description={item.description}
            amount={item.amount}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default AllCards;
