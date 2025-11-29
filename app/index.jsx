import { Image, StyleSheet, Text, View } from "react-native";
import { useState } from 'react';
import { FokusButton } from "../components/FokusButton";
import { ActionButton } from "../components/ActionButton";

const pomodoro = [
  { id: 'focus', initialValue: 25 * 60, image: require('../assets/images/IDGAF.jpg'), display: 'Foco' },
  { id: 'short', initialValue: 5 * 60, image: require('../assets/images/LONG DRIVES.jpg'), display: 'Pausa Curta' },
  { id: 'long', initialValue: 15 * 60, image: require('../assets/images/LOAFERS.jpg'), display: 'Pausa Longa' },
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0]);

  return (
    <View
      style={styles.container}
    >
      <Image
        style={styles.pomodoroImage} 
        source={timerType.image}
      />
      <View style={styles.actions}>

        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton 
              key={p.id} 
              active={p.id === timerType.id}
              onPress={() => setTimerType(p)} 
              display={p.display} 
            />
          ))}
        </View>

        <Text style={styles.timer}>
          { new Date(timerType.initialValue * 1000)
            .toLocaleTimeString('pt-BR', { minute: '2-digit', second: '2-digit' }) }
        </Text>

        <FokusButton />
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
  pomodoroImage: {
    width: '70%',
    height: '30%',
    objectFit: 'cover'
  },  
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#14448080',
    width: '85%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  timer: {
    fontSize: 54,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
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