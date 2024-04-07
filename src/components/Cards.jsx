import {View, Text} from 'react-native';
import React from 'react';

const Cards = ({sign, description, amount}) => {
  return (
    <View className="flex-row justify-between items-center  rounded-lg m-3 bg-card-bg">
      <Text className="text-text-color font-mono text-lg m-5">
        {description}
      </Text>

      <Text className="text-text-color font-mono text-lg m-5">
        {sign} $ {amount}
      </Text>
    </View>
  );
};

export default Cards;
