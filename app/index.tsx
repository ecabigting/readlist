import { Image, StyleSheet, Text } from 'react-native'
import Logo from '../assets/img/logo_light.png'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={Logo} style={styles.img} />
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
