import {TouchableOpacity, View, Text} from 'react-native';
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
      {expenses.length === 0 ? (
        <View className="flex-grow">
          <Text className="text-center p-28 font-bold">
            No Expenses. Make sure that there is enough balance before adding an
            expense
          </Text>
        </View>
      ) : (
        <AllCards data={expenses} />
      )}

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
