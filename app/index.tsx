import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        This is your Reading List! Go Read!
      </ThemedText>
      <Spacer />
      <ThemedText title={false}>Reading list app</ThemedText>
      <Spacer />
      <Link style={styles.link} href="/about">
        <ThemedText title={false}>About</ThemedText>
      </Link>
      <Link style={styles.link} href="/contact">
        <ThemedText title={false}>Contact</ThemedText>
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
