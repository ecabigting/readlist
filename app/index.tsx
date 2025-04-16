import { Image, StyleSheet, Text, View } from 'react-native'
import Logo from '../assets/img/logo_light.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={[styles.title, { fontSize: 50 }]}>Read List</Text>
      <Text style={{ marginTop: 10, marginBottom: 13 }}>Reading list app</Text>
    </View>
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
})
