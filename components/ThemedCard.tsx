import { StyleSheet, Text, useColorScheme, View, ViewProps, ViewStyle } from 'react-native'
import { systemColors } from '../constants/colors';

interface ThemedCardProps extends ViewProps {
  style?: ViewStyle; // Optional style prop
}

const ThemedCard: React.FC<ThemedCardProps> = ({ style, ...props }) => {
  const colorScheme = useColorScheme() || 'light'
  const theme = systemColors[colorScheme] ?? systemColors.light
  return (
    <View
      style={[{ backgroundColor: theme.uiBG }, styles.card,
        style]}
      {...props}
    />
  )
}

export default ThemedCard

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20
  }
})
