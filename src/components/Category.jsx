import {View, Text} from 'react-native';
import React from 'react';

const Category = () => {
  return (
    <View className=" w-[90%] flex-row justify-evenly items-start  rounded-lg px-5 ml-5 bordershadow-2xl">
      <Text className="text-text-color font-mono text-lg ">Expense</Text>

      <Text className="text-text-color font-mono text-lg ">Income</Text>
    </View>
  );
};

export default Category;
