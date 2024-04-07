import {View} from 'react-native';
import React, {useState} from 'react';
import Balance from './src/components/Balance';
import Category from './src/components/Category';
import ExpenseScreen from './src/components/ExpenseScreen';
import IncomeScreen from './src/components/IncomeScreen';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [newExpenseDescription, setNewExpenseDescription] = useState('');
  const [newExpenseAmount, setNewExpenseAmount] = useState('');
  const [incomes, setIncomes] = useState([]);
  const [newIncomeDescription, setNewIncomeDescription] = useState('');
  const [newIncomeAmount, setNewIncomeAmount] = useState('');
  const handleAddIncome = () => {
    if (!newIncomeDescription || !newIncomeAmount) {
      return;
    }
    setIncomes(prevIncomes => [
      ...prevIncomes,
      {
        sign: '+',
        description: newIncomeDescription,
        amount: parseFloat(newIncomeAmount),
      },
    ]);
  };

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
      <IncomeScreen
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newIncomeDescription={newIncomeDescription}
        setNewIncomeDescription={setNewIncomeDescription}
        newIncomeAmount={newIncomeAmount}
        setNewIncomeAmount={setNewIncomeAmount}
        handleAddIncome={handleAddIncome}
        incomes={incomes}
      />
    </View>
  );
};

export default App;
