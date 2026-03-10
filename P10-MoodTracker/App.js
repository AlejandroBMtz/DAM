import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  const [moodLevel, setMoodLevel] = useState(0);
  const [moodMessage, setMoodMessage] = useState('');
  const [moodImage, setMoodImage] = useState(null);

  const MAX_MOOD = 2;
  const MIN_MOOD = -2;

  useEffect(() => {
    if (moodLevel === -2) {
      setMoodMessage('Está bien no estar bien. Tómate tu tiempo.');
      setMoodImage(require('./assets/images/sad.jpg'));
    } else if (moodLevel === -1) {
      setMoodMessage('Poco a poco. Sé paciente contigo.');
      setMoodImage(require('./assets/images/neutral.jpg'));
    } else if (moodLevel === 0) {
      setMoodMessage('Respira profundo. Estás exactamente donde necesitas estar.');
      setMoodImage(require('./assets/images/happy.jpg'));
    } else if (moodLevel === 1) {
      setMoodMessage('Cada pequeño paso cuenta. Sigue brillando.');
      setMoodImage(require('./assets/images/excellent.jpg'));
    } else if (moodLevel === 2) {
      setMoodMessage('Eres una fuerza de la naturaleza. ¡Disfruta tu energía!');
      setMoodImage(require('./assets/images/flow.jpg'));
    }
  }, [moodLevel]);

  const increaseMood = () => {
    if (moodLevel < MAX_MOOD) {
      setMoodLevel(prev => prev + 1);
    }
  };

  const decreaseMood = () => {
    if (moodLevel > MIN_MOOD) {
      setMoodLevel(prev => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      {moodImage && (
        <Image
          source={moodImage}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      <Text style={styles.message}>{moodMessage}</Text>
      <Text style={styles.counterText}>Nivel de ánimo: {moodLevel}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.buttonSecondary, moodLevel === MIN_MOOD && styles.buttonDisabled]}
          onPress={decreaseMood}
          activeOpacity={moodLevel === MIN_MOOD ? 1 : 0.7}
        >
          <Text style={styles.buttonTextSecondary}>Bajar ánimo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonPrimary, moodLevel === MAX_MOOD && styles.buttonDisabled]}
          onPress={increaseMood}
          activeOpacity={moodLevel === MAX_MOOD ? 1 : 0.7}
        >
          <Text style={styles.buttonTextPrimary}>Subir ánimo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F2EE',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 140,
    marginBottom: 40,
    borderWidth: 4,
    borderColor: '#EBE5DC',
    overflow: 'hidden',
  },
  message: {
    fontSize: 28,
    fontWeight: '400',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'serif',
    lineHeight: 38,
  },
  counterText: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 30,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: 15,
  },
  buttonPrimary: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 30,
    backgroundColor: '#3D3D3D',
    elevation: 3,
  },
  buttonSecondary: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 30,
    backgroundColor: '#E6E0D8',
    elevation: 1,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonTextPrimary: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  buttonTextSecondary: {
    fontSize: 16,
    color: '#555555',
    fontWeight: '600',
  },
});