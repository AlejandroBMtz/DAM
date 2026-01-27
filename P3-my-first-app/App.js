import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (

    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>

        <View style={styles.titleContainer}>
          <Text style={styles.textlabel}>SAGA FAVORITA</Text>
          <Text style={styles.textTitle}>The Lord of the Rings</Text>
          <View style={styles.smallLine} />
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require('./assets/images/lotr.jpg')}
            style={styles.image}
          />
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Para mí, más que una fantasía, esta saga es una experiencia completa para mí. Es la razón por la que amo la épica. No es solo la trama, es la profundidad absurda con la que Tolkien creó todo y cómo las películas le hicieron justicia.
          </Text>

          <View style={styles.vinetasContainer}>
            <Text style={styles.vinetas}>•</Text>
            <Text style={styles.vinetasText}>
              <Text style={styles.boldText}>Un mundo 'real':</Text> El "Legendarium" de Tolkien no tiene rival. No escribió solo un libro, creó idiomas, historia y geografía. La Tierra Media se siente como un lugar que realmente existió en el pasado.
            </Text>
          </View>

          <View style={styles.vinetasContainer}>
            <Text style={styles.vinetas}>•</Text>
            <Text style={styles.vinetasText}>
              <Text style={styles.boldText}>La adaptación:</Text> La trilogía de Peter Jackson hizo lo que parecía imposible. Visualizar la magnitud de los libros sin perder su esencia. Todo, desde las armaduras hasta los actores, encajó a la perfección.
            </Text>
          </View>

          <View style={styles.vinetasContainer}>
            <Text style={styles.vinetas}>•</Text>
            <Text style={styles.vinetasText}>
              <Text style={styles.boldText}>La banda sonora:</Text> La música de Howard Shore es narrativa pura. No solo acompaña las escenas; te cuenta la historia y te transmite la paz de la Comarca o la tensión de Mordor con solo unas notas.
            </Text>
          </View>

          <View style={styles.vinetasContainer}>
            <Text style={styles.vinetas}>•</Text>
            <Text style={styles.vinetasText}>
              <Text style={styles.boldText}>Temas:</Text> Más allá de las batallas, trata sobre la corrupción del poder, la importancia de la gente común cambiando el curso de la historia, la reverencia por la naturaleza, la esperanza, la amistad y la melancolía por un mundo mágico que se desvanece para dar paso al dominio de los hombres.
            </Text>
          </View>

          <View style={styles.smallLine} />
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#121212',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  titleContainer: {
    marginBottom: 30,
  },
  textlabel: {
    fontSize: 12,
    color: '#BB86FC',
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  textTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFFFFF',
    lineHeight: 38,
  },
  imageContainer: {
    width: '100%',
    height: 250,
    marginBottom: 30,
    borderRadius: 12,
    backgroundColor: '#333',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },
  descriptionContainer: {
    alignItems: 'flex-start',
  },
  description: {
    fontSize: 16,
    color: '#E0E0E0',
    lineHeight: 24,
    fontWeight: '400',
    marginBottom: 16,
  },
  vinetasContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    paddingRight: 10,
  },
  vinetas: {
    fontSize: 20,
    color: '#BB86FC',
    marginRight: 10,
    marginTop: -2,
  },
  vinetasText: {
    fontSize: 15,
    color: '#CCCCCC',
    lineHeight: 22,
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  smallLine: {
    marginTop: 10,
    width: '90%',
    height: 2,
    backgroundColor: '#818181ff',
    borderRadius: 2,
  },
});