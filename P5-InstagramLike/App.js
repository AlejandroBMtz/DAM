import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={require('./assets/images/Instagram_logo.png')} style={styles.logoInstagram} />
      </View>

      <View style={styles.postHeader}>
        <View style={styles.userInfo}>
          <Image source={require('./assets/images/Avatar.png')} style={styles.avatar} />
          <Text style={styles.usernameText}>Username</Text>
        </View>

        <Image source={require('./assets/images/Icono_3_puntos.png')} style={styles.icon3Puntos} />
      </View>

      <View style={styles.postImageContainer}>
        <Image source={require('./assets/images/post.jpg')} style={styles.postImage} />
      </View>

      <View style={styles.actionsIcons}>
        <View style={styles.actionLeft}>
          <Image source={require('./assets/images/like.png')} style={styles.iconMedium} />
          <Image source={require('./assets/images/comment.png')} style={styles.iconMedium} />
          <Image source={require('./assets/images/share.png')} style={styles.iconMedium} />
        </View>

        <View style={styles.paginationPuntos}>
          <Text style={{ color: '#3498db' }}>●</Text>
          <Text style={{ color: '#ccc' }}> ● ● ● ● </Text>
        </View>

        <Image source={require('./assets/images/guardar.png')} style={styles.iconMedium} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.likesText}>501 views</Text>
        <Text style={styles.captionText}>
          <Text style={styles.boldText}>Username</Text> instagram template <Text style={styles.blueText}>#template</Text>
        </Text>
        <Text style={styles.greyText}>View all 370 comments</Text>
        <Text style={styles.dateText}>4 days ago</Text>
      </View>

      <View style={{ flex: 1 }} />

      <View style={styles.bottomBar}>
        <Image source={require('./assets/images/home.png')} style={styles.iconMenu} />
        <Image source={require('./assets/images/search.png')} style={styles.iconMenu} />
        <Image source={require('./assets/images/nueva.png')} style={styles.iconMenu} />
        <Image source={require('./assets/images/like.png')} style={styles.iconMenu} />
        <Image source={require('./assets/images/profile.png')} style={styles.iconMenu} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: '12%',
  },
  header: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  logoInstagram: {
    width: 110,
    height: 40,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
    borderWidth: 1.5,
    borderColor: '#c13584',
  },
  usernameText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  icon3Puntos: {
    width: 20,
    height: 20,
    marginRight: '5%',
  },
  postImageContainer: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  postImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  actionsIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  actionLeft: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
  },
  iconMedium: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  paginationPuntos: {
    flexDirection: 'row',
    marginRight: '12%',
  },
  textContainer: {
    paddingHorizontal: 12,
  },
  likesText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  captionText: {
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  blueText: {
    color: '#00376b',
  },
  greyText: {
    color: '#8e8e8e',
    fontSize: 12,
    marginBottom: 5,
  },
  dateText: {
    color: '#8e8e8e',
    fontSize: 10,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 65,
    borderTopWidth: 1,
    borderTopColor: '#dbdbdb',
    paddingBottom: 5,
  },
  iconMenu: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },
});