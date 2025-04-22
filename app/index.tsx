import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Text style={[styles.title, { fontSize: 50 }]}>Read List</Text>
      <Text style={{ marginTop: 10, marginBottom: 13 }}>Reading list app</Text>
      <Link style={styles.link} href="/about">About</Link>
      <Link style={styles.link} href="/contact">Contact</Link>

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
