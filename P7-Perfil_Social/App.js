import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView } from 'react-native';

export default function App() {

  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(6);

  const handlePress = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowers(followers - 1);
    } else {
      setIsFollowing(true);
      setFollowers(followers + 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.profileHeader}>
          <Image
            source={require('./assets/images/perfil.jpg')}
            style={styles.profileImage}
          />

          <View style={styles.profileInfo}>
            <Text style={styles.username}>Alejandro</Text>

            <Text style={styles.bio}>Apasionado a la musica y las experiencias sonoras</Text>

            <View style={styles.statsContainer}>
              <Text style={styles.statsText}>
                <Text style={styles.boldText}>{followers}</Text> seguidores
              </Text>
              <Text style={styles.statsText}> • </Text>
              <Text style={styles.statsText}>
                <Text style={styles.boldText}>78</Text> siguiendo
              </Text>
            </View>

            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={[styles.button, isFollowing ? styles.buttonUnfollow : styles.buttonFollow]}
                onPress={handlePress}
              >
                <Text style={[styles.buttonText, isFollowing ? styles.textUnfollow : styles.textFollow]}>
                  {isFollowing ? 'Siguiendo' : 'Seguir'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.playlistSection}>
          <Text style={styles.sectionTitle}>Playlists</Text>

          <View style={styles.playlistItem}>
            <View style={styles.coverPlaceholder}>
              <Image source={require('./assets/images/playlist1.jpg')} style={styles.coverImage} />
            </View>
            <View>
              <Text style={styles.playlistName}>Insomnio</Text>
              <Text style={styles.playlistSub}>Se guardó 1 veces</Text>
            </View>
          </View>

          <View style={styles.playlistItem}>
            <View style={styles.coverPlaceholder}>
              <Image source={require('./assets/images/playlist2.jpg')} style={styles.coverImage} />
            </View>
            <View>
              <Text style={styles.playlistName}>Rolitas chidas</Text>
              <Text style={styles.playlistSub}>Se guardó 0 veces</Text>
            </View>
          </View>

          <View style={styles.playlistItem}>
            <View style={styles.coverPlaceholder}>
              <Image source={require('./assets/images/playlist3.jpg')} style={styles.coverImage} />
            </View>
            <View>
              <Text style={styles.playlistName}>Selectas</Text>
              <Text style={styles.playlistSub}>Se guardó 2 veces</Text>
            </View>
          </View>

          <View style={styles.playlistItem}>
            <View style={styles.coverPlaceholder}>
              <Image source={require('./assets/images/playlist4.jpg')} style={styles.coverImage} />
            </View>
            <View>
              <Text style={styles.playlistName}>80's</Text>
              <Text style={styles.playlistSub}>Se guardó 0 veces</Text>
            </View>
          </View>

          <View style={styles.playlistItem}>
            <View style={styles.coverPlaceholder}>
              <Image source={require('./assets/images/playlist5.jpg')} style={styles.coverImage} />
            </View>
            <View>
              <Text style={styles.playlistName}>Relax</Text>
              <Text style={styles.playlistSub}>Se guardó 2 veces</Text>
            </View>
          </View>

          <View style={styles.playlistItem}>
            <View style={styles.coverPlaceholder}>
              <Image source={require('./assets/images/playlist6.jpg')} style={styles.coverImage} />
            </View>
            <View>
              <Text style={styles.playlistName}>Flow</Text>
              <Text style={styles.playlistSub}>Se guardó 0 veces</Text>
            </View>
          </View>

          <View style={styles.playlistItem}>
            <View style={styles.coverPlaceholder}>
              <Image source={require('./assets/images/playlist7.jpg')} style={styles.coverImage} />
            </View>
            <View>
              <Text style={styles.playlistName}>Pa' llorar</Text>
              <Text style={styles.playlistSub}>Se guardó 0 veces</Text>
            </View>
          </View>

          <View style={{ height: 50 }} />


          <Text style={styles.sectionTitle}>Artistas escuchados recientemente</Text>

          <View style={styles.playlistItem}>
            <View style={styles.coverPlaceholder}>
              <Image source={require('./assets/images/artista1.jpg')} style={styles.coverImageArtist} />
            </View>
            <View>
              <Text style={styles.playlistName}>Silvana Estrada</Text>
              <Text style={styles.playlistSub}>518,744 seguidores</Text>
            </View>
          </View>

          <View style={styles.playlistItem}>
            <View style={styles.coverPlaceholder}>
              <Image source={require('./assets/images/artista2.png')} style={styles.coverImageArtist} />
            </View>
            <View>
              <Text style={styles.playlistName}>Oncolors</Text>
              <Text style={styles.playlistSub}>2,781 seguidores</Text>
            </View>
          </View>

          <View style={styles.playlistItem}>
            <View style={styles.coverPlaceholder}>
              <Image source={require('./assets/images/artista3.jpg')} style={styles.coverImageArtist} />
            </View>
            <View>
              <Text style={styles.playlistName}>Howard Shore</Text>
              <Text style={styles.playlistSub}>517,752 seguidores</Text>
            </View>
          </View>


          <View style={{ height: 50 }} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 40,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  bio: {
    color: '#B3B3B3',
    marginBottom: 8,
    fontSize: 12,
    lineHeight: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  statsText: {
    color: '#B3B3B3',
    fontSize: 13,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  actionButtons: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
  },
  buttonFollow: {
    backgroundColor: 'transparent',
    borderColor: '#7f7f7f',
  },
  buttonUnfollow: {
    backgroundColor: 'transparent',
    borderColor: '#FFFFFF',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  textFollow: {
    color: '#FFFFFF',
  },
  textUnfollow: {
    color: '#FFFFFF',
  },
  playlistSection: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  coverPlaceholder: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  playlistName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  playlistSub: {
    color: '#B3B3B3',
    fontSize: 13,
    marginTop: 2,
  },
  coverImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  coverImageArtist: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
});