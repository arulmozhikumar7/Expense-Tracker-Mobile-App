import {View, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import Balance from './src/components/Balance';
import Category from './src/components/Category';
import ExpenseScreen from './src/components/ExpenseScreen';
import IncomeScreen from './src/components/IncomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  useEffect(() => {
    const loadDataFromStorage = async () => {
      const storedExpenses = await loadData('expenses');
      if (storedExpenses) {
        setExpenses(storedExpenses);
      }
      const storedIncomes = await loadData('incomes');
      if (storedIncomes) {
        setIncomes(storedIncomes);
      }
      const storedTotalIncome = await loadData('totalIncome');
      if (storedTotalIncome) {
        settotalIncome(storedTotalIncome);
      }
      const storedTotalExpense = await loadData('totalExpense');
      if (storedTotalExpense) {
        settotalExpense(storedTotalExpense);
      }
      const storedBalance = await loadData('balance');
      if (storedBalance) {
        setBalance(storedBalance);
      }
    };
    loadDataFromStorage();
  }, []);

  const saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Error saving data:', e);
    }
  };

  const loadData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return JSON.parse(value);
      }
      return null;
    } catch (e) {
      console.error('Error loading data:', e);
      return null;
    }
  };

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
    const updatedIncomes = [
      ...incomes,
      {
        sign: '+',
        description: newIncomeDescription,
        amount: parseFloat(newIncomeAmount),
      },
    ];
    const updatedTotalIncome = totalIncome + parseFloat(newIncomeAmount);
    const updatedBalance = balance + parseFloat(newIncomeAmount);

    setIncomes(updatedIncomes);
    settotalIncome(updatedTotalIncome);
    setBalance(updatedBalance);

    saveData('incomes', updatedIncomes);
    saveData('totalIncome', updatedTotalIncome);
    saveData('balance', updatedBalance);

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
    const updatedExpenses = [
      ...expenses,
      {
        sign: '-',
        description: newExpenseDescription,
        amount: parseFloat(newExpenseAmount),
      },
    ];
    const updatedTotalExpense = totalExpense + parseFloat(newExpenseAmount);
    const updatedBalance = balance - parseFloat(newExpenseAmount);

    setExpenses(updatedExpenses);
    settotalExpense(updatedTotalExpense);
    setBalance(updatedBalance);

    saveData('expenses', updatedExpenses);
    saveData('totalExpense', updatedTotalExpense);
    saveData('balance', updatedBalance);

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
