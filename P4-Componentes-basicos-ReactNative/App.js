import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainerStyle}
    >

      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>
          SPIDER-MAN: ACROSS THE SPIDER-VERSE
        </Text>
      </View>

      <View style={styles.contentContainer}>
        <Image
          source={require('./assets/images/Spiderman.jpg')}
          style={styles.image}
        />
        <Text style={styles.description}>
          Miles Morales se enfrenta a una amenaza que pone en riesgo a todo el multiverso, a la par de que debe descubrir su identidad como Spider-Man y tratar de salvar a las personas que más ama.
        </Text>
      </View>

      <View style={styles.detallesContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.secundarioTitle}>ESTILO VISUAL</Text>
          <Text style={styles.secundarioText}>
            La película combina técnicas de animación 2D y 3D, simulando la estética de los cómics impresos con errores de color y texturas de papel.
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.secundarioTitle}>EL MULTIVERSO</Text>
          <Text style={styles.secundarioText}>
            Se exploran 6 dimensiones distintas, cada una con su propio estilo artístico, desde la acuarela impresionista de Gwen hasta el estilo punk-collage de Hobie.
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.secundarioTitle}>LA TRAMA</Text>
          <Text style={styles.secundarioText}>
            Miles debe redefinir lo que significa ser un héroe para poder salvar a las personas que más ama.
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.secundarioTitle}>SOUNDTRACK</Text>
          <Text style={styles.secundarioText}>
            Producido por Metro Boomin, la banda sonora es una mezcla ecléctica de hip-hop y sonidos electrónicos.
          </Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  contentContainerStyle: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },

  tituloContainer: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#FF004D',
    paddingBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E2E8F0',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  contentContainer: {
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#00F0FF',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#94A3B8',
    textAlign: 'justify',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  detallesContainer: {
    width: '100%',
    flexDirection: 'column',
    gap: 15,
  },
  infoBox: {
    backgroundColor: '#1E293B',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FACC15',
  },
  secundarioTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FACC15',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  secundarioText: {
    fontSize: 13,
    color: '#CBD5E1',
    fontStyle: 'italic',
  },
});