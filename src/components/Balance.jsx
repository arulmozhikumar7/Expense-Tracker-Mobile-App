import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const Balance = () => {
  return (
    <View className=" h-[30%] flex-row items-center justify-between p-5 m-5">
      <View className="w-full h-full flex-col justify-start items-start  rounded-lg   shadow-2xl">
        <LinearGradient
          colors={['#73e1ed', '#17adc3', '#197085']}
          className="w-full h-full  flex-col justify-start items-start  rounded-lg  p-5 shadow-2xl">
          <Text className="text-white font-bold text-lg ">My Balance</Text>
          <Text className="text-white font-bold text-3xl mt-3">$ 1000</Text>
          <Text className="text-white font-thin text-sm mt-3">
            Spending (this month)
          </Text>
          <Text>
            <Text className="text-white font-bold text-lg mt-3">$ 400</Text>
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default Balance;
