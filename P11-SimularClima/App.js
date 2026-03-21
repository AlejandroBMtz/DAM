import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Animated, ScrollView } from 'react-native';


const imagenesLocales = {
  'Soleado': require('./assets/images/soleado.jpg'),
  'Nublado': require('./assets/images/nublado.jpg'),
  'Lluvioso': require('./assets/images/lluvioso.jpg'),
  'Tormenta': require('./assets/images/tormenta.jpg'),
};

export default function App() {
  const [clima, setClima] = useState('Soleado');
  const [ciudad, setCiudad] = useState('');

  const [temperatura, setTemperatura] = useState(0);
  const [mensaje, setMensaje] = useState('');

  const [imagen, setImagen] = useState(imagenesLocales['Soleado']);
  const [colores, setColores] = useState({ fondo: '#FFFACD', texto: '#FF8C00' });

  const [fechaHora, setFechaHora] = useState(new Date());
  const [historial, setHistorial] = useState([]);


  const temperaturaAleatoria = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setInterval(() => {
      setFechaHora(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: false,
    }).start();

    let nuevaTemp, nuevoMensaje, nuevosColores;

    switch (clima) {
      case 'Soleado':
        nuevaTemp = temperaturaAleatoria(24, 35);
        nuevoMensaje = "Hace un día perfecto para salir";
        nuevosColores = { fondo: '#FFFACD', texto: '#FF8C00', boton: '#FFA500' };
        break;
      case 'Nublado':
        nuevaTemp = temperaturaAleatoria(15, 23);
        nuevoMensaje = "El día está tranquilo y gris";
        nuevosColores = { fondo: '#D3D3D3', texto: '#2F4F4F', boton: '#A9A9A9' };
        break;
      case 'Lluvioso':
        nuevaTemp = temperaturaAleatoria(5, 14);
        nuevoMensaje = "No olvides tu paraguas";
        nuevosColores = { fondo: '#B0C4DE', texto: '#191970', boton: '#4682B4' };
        break;
      case 'Tormenta':
        nuevaTemp = temperaturaAleatoria(0, 4);
        nuevoMensaje = "Mejor quédate en casa";
        nuevosColores = { fondo: '#2F4F4F', texto: '#F0F8FF', boton: '#1C2833' };
        break;
      default:
        break;
    }


    setTemperatura(nuevaTemp);
    setMensaje(nuevoMensaje);

    setImagen(imagenesLocales[clima]);
    setColores(nuevosColores);

  }, [clima, fadeAnim]);

  const cambiarClima = (nuevoClima) => {
    if (nuevoClima !== clima) {
      setHistorial(prev => [clima, ...prev].slice(0, 5));
      setClima(nuevoClima);
    }
  };

  const climaAleatorio = () => {
    const climas = ['Soleado', 'Nublado', 'Lluvioso', 'Tormenta'];
    const random = climas[Math.floor(Math.random() * climas.length)];
    cambiarClima(random);
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colores.fondo }]}>

      <View style={styles.header}>
        <Text style={[styles.reloj, { color: colores.texto }]}>
          {fechaHora.toLocaleTimeString()}
        </Text>
        <Text style={[styles.fecha, { color: colores.texto }]}>
          {fechaHora.toLocaleDateString()}
        </Text>
        <TextInput
          style={[styles.input, { borderColor: colores.texto, color: colores.texto }]}
          placeholder="Escribe tu ciudad..."
          placeholderTextColor={colores.texto + '80'}
          value={ciudad}
          onChangeText={setCiudad}
        />
        {ciudad ? <Text style={[styles.ciudadTitle, { color: colores.texto }]}>{ciudad}</Text> : null}
      </View>

      <Animated.View style={[styles.climaContainer, { opacity: fadeAnim }]}>
        <Image source={imagen} style={styles.imagen} />
        <Text style={[styles.temperatura, { color: colores.texto }]}>
          {temperatura}°C
        </Text>
        <Text style={[styles.estadoClima, { color: colores.texto }]}>
          {clima}
        </Text>
        <Text style={[styles.mensaje, { color: colores.texto }]}>
          {mensaje}
        </Text>
      </Animated.View>


      <View style={styles.botonesContainer}>
        {['Soleado', 'Nublado', 'Lluvioso', 'Tormenta'].map((tipo) => (
          <TouchableOpacity
            key={tipo}
            style={[styles.boton, { backgroundColor: colores.boton }]}
            onPress={() => cambiarClima(tipo)}
          >
            <Text style={styles.botonTexto}>{tipo}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={[styles.botonRandom, { borderColor: colores.texto }]}
          onPress={climaAleatorio}
        >
          <Text style={[styles.botonTextoRandom, { color: colores.texto }]}>Clima Aleatorio</Text>
        </TouchableOpacity>
      </View>

      {historial.length > 0 && (
        <View style={styles.historialContainer}>
          <Text style={[styles.historialTitle, { color: colores.texto }]}>Últimos climas simulados:</Text>
          {historial.map((item, index) => (
            <View key={index} style={styles.historialItemContainer}>
              <Text style={[styles.historialBullet, { color: colores.texto }]}>•</Text>
              <Text style={[styles.historialItem, { color: colores.texto }]}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
    transition: 'background-color 0.5s ease',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  reloj: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  fecha: {
    fontSize: 16,
    marginBottom: 15,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  ciudadTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    textTransform: 'capitalize',
  },
  climaContainer: {
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  imagen: {
    width: 260,
    height: 180,
    borderRadius: 15,
    marginBottom: 20,
  },
  temperatura: {
    fontSize: 64,
    fontWeight: '900',
  },
  estadoClima: {
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  mensaje: {
    fontSize: 18,
    fontStyle: 'italic',
    marginTop: 10,
    textAlign: 'center',
  },
  botonesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    gap: 10,
    marginTop: 20,
  },
  boton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    minWidth: '40%',
    alignItems: 'center',
    margin: 5,
  },
  botonTexto: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botonRandom: {
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '85%',
    alignItems: 'center',
    marginTop: 15,
    borderStyle: 'dashed',
  },
  botonTextoRandom: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  historialContainer: {
    marginTop: 40,
    width: '90%',
    padding: 15,
    borderTopWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  historialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historialItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  historialBullet: {
    fontSize: 20,
    marginRight: 10,
    fontWeight: 'bold',
  },
  historialItem: {
    fontSize: 16,
  }
});