import { View, Text, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowRight, Heart } from 'lucide-react-native'

import { styles } from '../styles/Home.styles'
import { colors } from '../theme/colors'
import Prato from '../assets/prato-dropshadow.png'

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.headerButton}>
          <ArrowRight size={20} color={colors.textPrimary} />
        </Pressable>

        <Pressable style={styles.headerButton}>
          <Heart size={20} color={colors.textPrimary} />
        </Pressable>
      </View>

      <View style={styles.detailsContainer}>
        <Image
          source={Prato}
          style={styles.image}
        />

        <View style={styles.details}>
          <Text style={styles.foodTitle}>Salada variada</Text>

          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <Text style={styles.infoTitle}>Energia</Text>
              <Text style={styles.infoValue}>221,15 kcal</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoTitle}>Porção total</Text>
              <Text style={styles.infoValue}>240 g</Text>
            </View>
          </View>

          <View>
            <Text>asd</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}