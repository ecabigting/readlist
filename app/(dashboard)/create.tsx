import { StyleSheet } from 'react-native'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedView from '../../components/ThemedView'


const CreateBooks = () => {
  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedText title={true} style={styles.heading}>
        Add a New Book</ThemedText>
      <Spacer />
    </ThemedView>

  )
}

export default CreateBooks

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: 'center'
  }
})
