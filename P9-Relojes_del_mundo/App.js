import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.cardPais}>
        <Text style={styles.title}>México</Text>
        <Text style={styles.time}>{time.toLocaleTimeString('en-US', { timeZone: 'America/Mexico_City' })}</Text>
      </View>

      <View style={styles.cardPais}>
        <Text style={styles.title}>New York</Text>
        <Text style={styles.time}>{time.toLocaleTimeString('en-US', { timeZone: 'America/New_York' })}</Text>
      </View>

      <View style={styles.cardPais}>
        <Text style={styles.title}>London</Text>
        <Text style={styles.time}>{time.toLocaleTimeString('en-GB', { timeZone: 'Europe/London' })}</Text>
      </View>

      <View style={styles.cardPais}>
        <Text style={styles.title}>Tokyo</Text>
        <Text style={styles.time}>{time.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo' })}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  cardPais: {
    backgroundColor: '#1E293B',
    width: '100%',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: '#38BDF8',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 3,
    marginBottom: 8,
  },
  time: {
    fontSize: 46,
    color: '#F8FAFC',
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
  },
});