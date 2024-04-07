import {View, Text} from 'react-native';
import React from 'react';

const AddButton = ({buttonname}) => {
  return (
    <View className="bg-btn-color  rounded-lg m-5 items-center justify-center w-[90%] p-5">
      <Text className="text-white font-bold">{buttonname}</Text>
    </View>
  );
};

export default AddButton;
