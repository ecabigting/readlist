import { StyleSheet } from 'react-native'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
const Profile = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedText title={true} style={styles.heading}>
        Your Email
      </ThemedText>
      <ThemedText title={false}>
        Go Get Reading!
      </ThemedText>
      <Spacer />
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: 'center'
  }
})
