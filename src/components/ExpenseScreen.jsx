import {TouchableOpacity} from 'react-native';
import React from 'react';
import AllCards from './AllCards';
import AddButton from './AddButton';
import Form from './Form';
const ExpenseScreen = ({
  expenses,
  setModalVisible,
  modalVisible,
  newExpenseDescription,
  setNewExpenseDescription,
  newExpenseAmount,
  setNewExpenseAmount,
  handleAddExpense,
}) => {
  return (
    <>
      <AllCards data={expenses} />
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        activeOpacity={0.8}>
        <AddButton buttonname={'Add Expense'} />
      </TouchableOpacity>
      <Form
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        newExpenseDescription={newExpenseDescription}
        setNewExpenseDescription={setNewExpenseDescription}
        newExpenseAmount={newExpenseAmount}
        setNewExpenseAmount={setNewExpenseAmount}
        handleAddExpense={handleAddExpense}
      />
    </>
  );
};

export default ExpenseScreen;
