import { StatusBar } from 'expo-status-bar';
import { Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins'
import * as NavigationBar from 'expo-navigation-bar'

import { Home } from './src/pages/Home';
import { colors } from './src/theme/colors';

export default function App() {
  NavigationBar.setBackgroundColorAsync(colors.surface)
  NavigationBar.setButtonStyleAsync('dark')

  const [hasFonts] = useFonts({
    poppins: Poppins_400Regular,
    poppinsSemibold: Poppins_600SemiBold
  })

  if (!hasFonts) return

  return (
    <>
      <Home />

      <StatusBar style="auto" />
    </>
  );
}
