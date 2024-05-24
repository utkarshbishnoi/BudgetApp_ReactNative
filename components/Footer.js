import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Paragraph} from 'react-native-paper';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Paragraph style={styles.footerText}>
        Developed with ❤️ by Utkarsh Bishnoi | Nagarro.
      </Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerText: {
    textAlign: 'center',
    color: '#333',
  },
});

export default Footer;
