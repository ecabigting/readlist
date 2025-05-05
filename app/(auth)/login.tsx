import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router'
import { systemColors } from '../../constants/colors'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleOnLoginSubmit = () => {
    console.log("Login Form Submitted")
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView safe={true} style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Login
        </ThemedText>

        <ThemedTextInput placeholder='Email' style={{ width: '80%', marginBottom: 20 }}
          keyboardType='email-address'
          onChangeText={setEmail}
          value={email}
        />
        <ThemedTextInput placeholder='Password' style={{ width: '80%', marginBottom: 20 }}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <ThemedButton
          onPress={handleOnLoginSubmit}
        >
          <Text style={{ color: '#f2f2f2' }}>
            Login
          </Text>
        </ThemedButton>

        <Spacer height={100} />
        <Link href="/register">
          <ThemedText title={false} style={{ textAlign: 'center' }}>Register Now!</ThemedText>
        </Link>
      </ThemedView >
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30
  },
  btn: {
    backgroundColor: systemColors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8
  }
})
