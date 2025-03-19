import { theme } from '@/src/theme';
import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const ActivityIndicatorComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primaryColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
});

export default ActivityIndicatorComponent;