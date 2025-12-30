import { router } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import { FokusButton } from '../components/FokusButton';

export default function Index(){

  return(
    <View style={styles.container}>
      {/* <Text>Home</Text>
      <Link href={{ pathname: '/pomodoro' }}>Quero iniciar</Link> */}
      <Image 
        source={require('../assets/images/Logo.png')} />
      
      <View style={styles.inner}>
        <Text style={styles.title}>
          Otimize sua {'\n'} produtividade, {'\n'}
          <Text style={styles.bold}>
            mergulhe no que {'\n'} importa
          </Text> 
        </Text> 
        <Image 
          source={require('../assets/images/Imagem tela inicial.png')} />
        <FokusButton 
          title='Quero iniciar!' 
          onPress={() => router.navigate('/pomodoro')}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Projeto Fictício Sem Fina Comerciais.</Text>
        <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#021123',
    gap: 40
  },
  inner: {
    gap: 16
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 26,
  },
  bold: {
    fontWeight: 'bold',
  },
  footer: {
    width: '80%'
  },
  footerText: {
    textAlign: 'center',
    color: '#98a0a8',
    fontSize: 12.5,
  },
});