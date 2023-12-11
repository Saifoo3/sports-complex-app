import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Barcode from 'react-native-barcode-builder';

const RandomBarcodeGenerator = () => {
  const [randomBarcode, setRandomBarcode] = useState(generateRandomBarcode());

  // Function to generate a random barcode
  function generateRandomBarcode() {
    const randomBarcodeNumber = Math.floor(Math.random() * 1000000000000).toString();
    return randomBarcodeNumber;
  }

  // Function to generate a new random barcode
  function generateNewBarcode() {
    const newRandomBarcode = generateRandomBarcode();
    setRandomBarcode(newRandomBarcode);
  }

  return (
    <View style={styles.container}>
      <Barcode value={randomBarcode} format="CODE128" />
      <TouchableOpacity onPress={generateNewBarcode} style={styles.button}>
        <Text style={styles.buttonText}>Generate New Barcode</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RandomBarcodeGenerator;
