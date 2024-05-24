import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, TextInput, Button} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  Button as PaperButton,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const BudgetEntryScreen = () => {
  const [itemName, setItemName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState(0);
  const [actualAmount, setActualAmount] = useState(0);

  // Dispatch function to interact with Redux store
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSave = () => {
    if (itemName && plannedAmount && actualAmount) {
      dispatch({
        type: 'ADD_BUDGET_ENTRY',
        payload: {itemName, plannedAmount, actualAmount},
      });
      setItemName('');
      setPlannedAmount(0);
      setActualAmount(0);
      toListing();
    } else {
      console.warn('Please enter values !');
    }
  };
  const toListing = () => {
    navigation.navigate('Budget Listing');
  };
  return (
    <Card style={{padding: 20}}>
      <Paragraph>Item Name</Paragraph>
      <TextInput value={itemName} onChangeText={setItemName} />
      <Paragraph>Planned Amount</Paragraph>
      <TextInput
        value={plannedAmount.toString()}
        onChangeText={text => setPlannedAmount(parseFloat(text))}
        keyboardType="numeric"
      />
      <Paragraph>Actual Amount</Paragraph>
      <TextInput
        value={actualAmount.toString()}
        onChangeText={text => setActualAmount(parseFloat(text))}
        keyboardType="numeric"
      />
      <PaperButton mode="contained" onPress={handleSave}>
        Save
      </PaperButton>
      <PaperButton style={{marginTop: 10}} mode="contained" onPress={toListing}>
        Show items
      </PaperButton>
    </Card>
  );
};

export default BudgetEntryScreen;
