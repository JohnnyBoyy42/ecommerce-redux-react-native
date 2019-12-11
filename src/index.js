import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import './config/ReactotronConfig';

export default function App() {
  const styles = StyleSheet.create({
    engine: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <>
      <View style={styles.engine}>
        <Text>Engine: mes</Text>
      </View>
    </>
  );
}
