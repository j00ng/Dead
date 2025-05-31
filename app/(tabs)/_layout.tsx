import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home'}}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'Community'}}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Map'}}
      />
    </Tabs>
  );
}
