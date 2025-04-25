import { Stack } from 'expo-router'
import { StyleSheet, useColorScheme } from 'react-native'
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
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(dashboard)' options={{ headerShown: false }} />
        <Stack.Screen name='index' options={{ title: 'Home' }} />
        {/* <Stack.Screen name='(auth)/login' options={{ title: 'Login' }} /> */}
        {/* <Stack.Screen name='(auth)/register' options={{ title: 'Register' }} /> */}
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
