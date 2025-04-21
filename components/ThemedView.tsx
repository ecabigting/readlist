import { useColorScheme, View, ViewProps, ViewStyle } from 'react-native'
import { systemColors } from '../constants/colors'

interface ThemedViewProps extends ViewProps {
  style?: ViewStyle; // Optional style prop
}

const ThemedView: React.FC<ThemedViewProps> = ({ style, ...props }) => {
  const colorScheme = useColorScheme() || 'light'
  const theme = systemColors[colorScheme] ?? systemColors.light
  {/*
    Without closing the <View> component
    We are self closing the component which allows
    the component to render any children passed into it
  */}
  return (
    <View
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
    />
  )
}

export default ThemedView
