import { StyleSheet } from 'react-native'
import { colors } from '../theme/colors'
import { fontSize } from '../theme/sizes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surfaceElement
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerButton: {
    backgroundColor: colors.surfaceElement,
    borderRadius: 999,
    elevation: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },

  detailsContainer: {
    flex: 1,
    backgroundColor: colors.surface,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: 32
  },
  image: {
    width: 450,
    height: 450,
    alignSelf: 'center',
    marginTop: -116,
  },

  details: {
    marginTop: -80,
    gap: 24,
    padding: 32
  },
  foodTitle: {
    fontFamily: 'poppinsSemibold',
    color: colors.textPrimary,
    fontSize: fontSize['4xl'],
    textAlign: 'center'
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  info: {
    flex: 1,
    alignItems: 'center'
  },
  infoTitle: {
    fontFamily: 'poppinsSemibold',
    fontSize: fontSize.sm
  },
  infoValue: {
    fontFamily: 'poppins',
    fontSize: fontSize.md
  }
})