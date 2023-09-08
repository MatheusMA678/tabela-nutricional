import { StyleSheet } from 'react-native'
import { colors } from '../theme/colors'

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
    borderRadius: 9999,
    // elevation: 18,
    borderColor: colors.primary, // sim, eu q botei
    borderWidth: 1,
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
  }
})