import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { systemColors } from "../../constants/colors"

const DashboardLayout = () => {
  const colorScheme = useColorScheme() || 'light'
  const theme = systemColors[colorScheme] ?? systemColors.light

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.navBackground,
          paddingTop: 10,
          height: 90
        },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor
      }}
    >
      <Tabs.Screen name="books" options={{
        title: 'Books',
      }} />
      <Tabs.Screen name="Create" options={{
        title: 'Create',
      }} />
      <Tabs.Screen name="profile" options={{
        title: 'Profile',
      }} />
    </Tabs>
  )
}

export default DashboardLayout

