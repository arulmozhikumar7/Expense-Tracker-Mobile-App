import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Category = ({toggleScreen, screen}) => {
  return (
    <View className=" w-[90%] flex-row justify-evenly items-start  rounded-lg px-5 ml-5 bordershadow-2xl">
      <TouchableOpacity onPress={toggleScreen}>
        <Text
          className={
            screen === 'Expense'
              ? 'text-text-color font-mono text-lg underline'
              : 'text-text-color font-mono text-lg '
          }>
          Expense
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleScreen}>
        <Text
          className={
            screen === 'Income'
              ? 'text-text-color font-mono text-lg underline'
              : 'text-text-color font-mono text-lg '
          }>
          Income
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Category;
