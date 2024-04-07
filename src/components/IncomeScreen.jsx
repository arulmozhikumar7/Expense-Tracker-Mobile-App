import {TouchableOpacity} from 'react-native';
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
      <AllCards data={incomes} />
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
