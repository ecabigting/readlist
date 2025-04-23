import { Pressable, PressableProps, StyleSheet, ViewStyle } from 'react-native'
import { systemColors } from '../constants/colors'

interface ThemedButtonProps extends PressableProps {
  style?: ViewStyle, //dd Optional style prop
}

const ThemedButton: React.FC<ThemedButtonProps> = ({ style, ...props }) => {

  return (
    <>
      {/*
       Implementation of Pressable component 
       On the style prop, we pass a function 
       We destructure the pressed boolean 
       The function then returns an array 
       The 1st element of the array is the 
       normal state(unpressed) of the pressable component 
       the second element is for applying style 
       when the component is pressed 
       */}
      <Pressable
        style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
        {...props}
      />
    </>
  )
}

export default ThemedButton

const styles = StyleSheet.create({
  btn: {
    backgroundColor: systemColors.primary,
    padding: 18,
    borderRadius: 6,
    marginVertical: 10
  },
  pressed: {
    opacity: 0.8
  }
})
