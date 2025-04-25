import { StyleSheet } from 'react-native'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'


const CreateBooks = () => {
  return (
    <ThemedText title={true} style={styles.container}>
      <ThemedText title={true} style={styles.heading}>
        Add a New Book</ThemedText>
      <Spacer />
    </ThemedText>

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
