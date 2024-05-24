import React from 'react';
import {useSelector} from 'react-redux'; // For accessing state from store
import {View, FlatList} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper'; // Import components

const BudgetListingScreen = () => {
  const entries = useSelector(state => state.entries);

  const renderItem = ({item}) => (
    <Card style={{margin: 5}}>
      <Card.Content>
        <Title>{item.itemName}</Title>
        <Paragraph>Planned: {item.plannedAmount}</Paragraph>
        <Paragraph>Actual: {item.actualAmount}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={{padding: 20, marginBottom: 30}}>
      <FlatList
        data={entries}
        renderItem={renderItem}
        keyExtractor={item => item.itemName} // Unique key for each item
      />
    </View>
  );
};

export default BudgetListingScreen;
