import { Stack } from 'expo-router'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { systemColors } from '../constants/colors';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
  const colorSheme = useColorScheme();
  const theme = systemColors[colorSheme ?? 'light'] ?? systemColors.light
  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title
      }}>
        <Stack.Screen name='index' options={{ title: 'Home' }} />
        <Stack.Screen name='about' options={{ title: 'About' }} />
        <Stack.Screen name='contact' options={{ title: 'Contact' }} />
      </Stack>

    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
