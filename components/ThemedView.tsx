import { useColorScheme, View, ViewProps, ViewStyle } from 'react-native'
import { systemColors } from '../constants/colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ThemedViewProps extends ViewProps {
  style?: ViewStyle; // Optional style prop
  safe: boolean,
}

const ThemedView: React.FC<ThemedViewProps> = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme() || 'light'
  const theme = systemColors[colorScheme] ?? systemColors.light

  {/*
    Without closing the <View> component
    We are self closing the component which allows
    the component to render any children passed into it
  */}
  if (!safe) return (
    <View
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
    />
  )

  const inSets = useSafeAreaInsets()

  return (
    <View
      style={[{
        paddingTop: inSets.top,
        paddingBottom: inSets.bottom,
        paddingRight: inSets.right,
        paddingLeft: inSets.left,
        backgroundColor: theme.background
      }, style]}
      {...props}
    />
  )
}

export default ThemedView
