import {View} from 'react-native';
import React, {useState} from 'react';
import Balance from './src/components/Balance';
import Category from './src/components/Category';
import ExpenseScreen from './src/components/ExpenseScreen';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [newExpenseDescription, setNewExpenseDescription] = useState('');
  const [newExpenseAmount, setNewExpenseAmount] = useState('');

  const handleAddExpense = () => {
    if (!newExpenseDescription || !newExpenseAmount) {
      return;
    }
    setExpenses(prevExpenses => [
      ...prevExpenses,
      {
        sign: '-',
        description: newExpenseDescription,
        amount: parseFloat(newExpenseAmount),
      },
    ]);

    setModalVisible(false);

    setNewExpenseDescription('');
    setNewExpenseAmount('');
  };

  return (
    <View style={{flex: 1}}>
      <Balance />
      <Category />
      <ExpenseScreen
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newExpenseDescription={newExpenseDescription}
        setNewExpenseDescription={setNewExpenseDescription}
        newExpenseAmount={newExpenseAmount}
        setNewExpenseAmount={setNewExpenseAmount}
        handleAddExpense={handleAddExpense}
        expenses={expenses}
      />
    </View>
  );
};

export default App;
