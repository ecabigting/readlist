import { View, ViewStyle } from 'react-native'

interface SpacerProps {
  width?: string | number | undefined,
  height?: string | number | undefined,
}


const Spacer: React.FC<SpacerProps> = ({ width = "100%", height = 40 }) => {
  return (
    <View style={{ width, height } as ViewStyle} />
  )
}

export default Spacer

