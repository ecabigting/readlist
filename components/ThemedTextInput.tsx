// import { Container } from './styles';
import { TextInput, TextInputProps, TextStyle, useColorScheme } from "react-native";
import { systemColors } from "../constants/colors";

interface ThemedTextProps extends TextInputProps {
  style?: TextStyle; // Optional style prop
}

const ThemedTextInput: React.FC<ThemedTextProps> = ({ style, ...props }) => {
  const colorScheme = useColorScheme() || 'light'
  const theme = systemColors[colorScheme] ?? systemColors.light

  return (<TextInput
    style={[
      {
        backgroundColor: theme.uiBG,
        color: theme.text,
        padding: 20,
        borderRadius: 6
      },
      style
    ]}
    {...props}
  />)

}

export default ThemedTextInput;
