import {View, Text, Modal, Pressable, TextInput} from 'react-native';
import React from 'react';

const IncomeForm = ({
  setModalVisible,
  modalVisible,
  newIncomeDescription,
  setNewIncomeDescription,
  newIncomeAmount,
  setNewIncomeAmount,
  handleAddIncome,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View className="flex-1 justify-center items-center bg-[#00000080]">
        <View className="bg-white p-6  w-[80%] rounded-2xl">
          <Text className="text-text-color mb-1">Description:</Text>
          <TextInput
            className="rounded-2xl mb-3 p-3 border border-[#197085]"
            value={newIncomeDescription}
            onChangeText={text => setNewIncomeDescription(text)}
          />
          <Text className="text-text-color mb-1">Amount:</Text>
          <TextInput
            className="rounded-2xl mb-3 p-3 border border-[#197085]"
            value={newIncomeAmount}
            onChangeText={text => setNewIncomeAmount(text)}
            keyboardType="numeric"
          />
          <Pressable
            onPress={handleAddIncome}
            className="bg-btn-color p-3 rounded-2xl">
            <Text style={{color: 'white', textAlign: 'center'}}>
              Add Income
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setModalVisible(false)}
            style={{marginTop: 10}}>
            <Text className="text-center text-text-color">Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default IncomeForm;
