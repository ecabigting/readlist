import { StyleSheet, Text } from 'react-native'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'

const Register = () => {
  const handleRegisterBtnSubmit = () => {
    console.log("Register Form Submitted")
  }
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register an Account
      </ThemedText>
      <ThemedButton onPress={handleRegisterBtnSubmit}>
        <Text style={{ color: '#f2f2f2' }}>
          Register</Text>
      </ThemedButton>
      <Spacer height={100} />
      <Link href='/login'>
        <ThemedText title={false} style={{ textAlign: 'center' }}>
          Login instead
        </ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Register

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
  }
})
