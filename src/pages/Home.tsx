import { View, Text, Pressable } from 'react-native'
import { styles } from '../styles/Home.styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowRight, Heart } from 'lucide-react-native'
import { colors } from '../theme/colors'
import { Image } from 'expo-image'

import DropShadow from 'react-native-drop-shadow'

import Prato from '../assets/prato.png'

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

        <DropShadow
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 5,
          }}
        >
          <Pressable style={styles.headerButton}>
            <ArrowRight size={20} color={colors.textPrimary} />
          </Pressable>
        </DropShadow>

        <Pressable style={styles.headerButton}>
          <Heart size={20} color={colors.textPrimary} />
        </Pressable>
      </View>

      <View style={styles.detailsContainer}>
        <Image
          source={Prato}
        />
      </View>
    </SafeAreaView>
  )
}