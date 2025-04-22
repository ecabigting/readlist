import { Text, useColorScheme, TextStyle, TextProps } from 'react-native'
import { systemColors } from '../constants/colors';

interface ThemedTextProps extends TextProps {
  style?: TextStyle; // Optional style prop
  title: boolean
}

const ThemedText: React.FC<ThemedTextProps> = ({ style, title = false, ...props }) => {
  const colorScheme = useColorScheme() || 'light'
  const theme = systemColors[colorScheme] ?? systemColors.light
  const textColor = title ? theme.title : theme.text
  return (
    <Text style={[{ color: textColor }, style]}
      {...props}
    />)
}

export default ThemedText

