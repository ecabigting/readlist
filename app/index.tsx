import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedLogo />
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        This is your Reading List! Go Read!
      </ThemedText>
      <Spacer />
      <ThemedText title={false}>Reading list app</ThemedText>
      <Spacer />
      <Link style={styles.link} href="/login">
        <ThemedText title={false}>Login</ThemedText>
      </Link>
      <Link style={styles.link} href="/register">
        <ThemedText title={false}>Register</ThemedText>
      </Link>
      <Link style={styles.link} href="/books">
        <ThemedText title={false}>Books</ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  img: {
    marginVertical: 50
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})
