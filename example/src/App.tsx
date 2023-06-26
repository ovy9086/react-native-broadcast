import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { broadcast } from 'react-native-event-broadcast';

export default function App() {
  React.useEffect(() => {
    broadcast('CustomNotification');
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Text>K bye.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
