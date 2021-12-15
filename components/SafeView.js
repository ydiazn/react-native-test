import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SaafeView({ style, children }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, ...style }}>{children}</View>
  );

};

