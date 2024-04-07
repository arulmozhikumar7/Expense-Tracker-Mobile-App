import {View, Alert} from 'react-native';
import React, {useState} from 'react';
import Balance from './src/components/Balance';
import Category from './src/components/Category';
import ExpenseScreen from './src/components/ExpenseScreen';
import IncomeScreen from './src/components/IncomeScreen';

const App = () => {
  const [balance, setBalance] = useState(0);
  const [totalIncome, settotalIncome] = useState(0);
  const [totalExpense, settotalExpense] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [newExpenseDescription, setNewExpenseDescription] = useState('');
  const [newExpenseAmount, setNewExpenseAmount] = useState('');
  const [incomes, setIncomes] = useState([]);
  const [newIncomeDescription, setNewIncomeDescription] = useState('');
  const [newIncomeAmount, setNewIncomeAmount] = useState('');
  const [screen, setScreen] = useState('Income');
  const toggleScreen = () => {
    setScreen(prevScreen => (prevScreen === 'Expense' ? 'Income' : 'Expense'));
  };
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
    settotalIncome(
      prevtotalIncome => prevtotalIncome + parseFloat(newIncomeAmount),
    );
    setBalance(prevBalance => prevBalance + parseFloat(newIncomeAmount));
    setModalVisible(false);
    setNewIncomeDescription('');
    setNewIncomeAmount('');
  };

  const handleAddExpense = () => {
    if (balance < 0 || balance < newExpenseAmount) {
      Alert.alert('Error', 'Balance cannot be negative. Add income first.');
      setModalVisible(false);
      setNewExpenseDescription('');
      setNewExpenseAmount('');
      return;
    }
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
    settotalExpense(
      prevtotalExpense => prevtotalExpense + parseFloat(newExpenseAmount),
    );
    setBalance(prevBalance => prevBalance - parseFloat(newExpenseAmount));
    setModalVisible(false);

    setNewExpenseDescription('');
    setNewExpenseAmount('');
  };

  return (
    <View style={{flex: 1}}>
      <Balance
        balance={balance}
        totalExpense={totalExpense}
        totalIncome={totalIncome}
      />
      <Category toggleScreen={toggleScreen} screen={screen} />
      {screen === 'Expense' ? (
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
      ) : (
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
      )}
    </View>
  );
};

export default App;
