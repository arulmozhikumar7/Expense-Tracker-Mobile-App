import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import AllCards from './AllCards';
import AddButton from './AddButton';
import IncomeForm from './IncomeForm';
const IncomeScreen = ({
  incomes,
  setModalVisible,
  modalVisible,
  newIncomeDescription,
  setNewIncomeDescription,
  newIncomeAmount,
  setNewIncomeAmount,
  handleAddIncome,
}) => {
  return (
    <>
      {incomes.length === 0 ? (
        <View className="flex-grow">
          <Text className="text-center p-28 font-bold">
            Add Your First Income
          </Text>
        </View>
      ) : (
        <AllCards data={incomes} />
      )}

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        activeOpacity={0.8}>
        <AddButton buttonname={'Add Income'} />
      </TouchableOpacity>
      <IncomeForm
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        newIncomeDescription={newIncomeDescription}
        setNewIncomeDescription={setNewIncomeDescription}
        newIncomeAmount={newIncomeAmount}
        setNewIncomeAmount={setNewIncomeAmount}
        handleAddIncome={handleAddIncome}
      />
    </>
  );
};

export default IncomeScreen;
