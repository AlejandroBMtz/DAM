import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal, SafeAreaView } from 'react-native';
import { useState } from 'react';

const App = () => {
  const [numberLikes, setNumberLikes] = useState(501);
  const [likeColor, setLikeColor] = useState('gray');
  const [isSaved, setIsSaved] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [storyViews, setStoryViews] = useState(0);
  const [isStorySeen, setIsStorySeen] = useState(false);

  const handleLikesAndColor = () => {
    if (likeColor === 'gray') {
      setLikeColor("red");
      setNumberLikes(numberLikes + 1);
    } else {
      setLikeColor("gray");
      setNumberLikes(numberLikes - 1);
    }
  }

  const handleSaveToggle = () => {
    setIsSaved(!isSaved);
  }

  const openStory = () => {
    setModalVisible(true);
    setStoryViews(storyViews + 1);
    setIsStorySeen(true);
  };

  const closeStory = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeStory}
      >
        <SafeAreaView style={styles.modalContainer}>

          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar} />
          </View>

          <View style={styles.storyHeader}>
            <View style={styles.storyUserInfo}>
              <Image source={require('./assets/images/person1.jpg')} style={styles.storyHeaderAvatar} />
              <Text style={styles.storyHeaderUsername}>Alex</Text>
              <Text style={styles.storyTime}>7h</Text>
            </View>

            <TouchableOpacity onPress={closeStory}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.storyContent}>
            <Image source={require('./assets/images/story.jpg')} style={styles.fullStoryImage} />

            <Text style={styles.storyOverlayText}>¡Que buen día!  :D</Text>
          </View>

          <View style={styles.viewsContainer}>
            <Text style={styles.viewsText}>{storyViews} visualizaciones</Text>
          </View>


        </SafeAreaView>
      </Modal>


      <View style={styles.header}>
        <Image source={require('./assets/images/Instagram_logo.png')} style={styles.logoInstagram} />
      </View>


      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.storiesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            <TouchableOpacity onPress={openStory} style={styles.profileStory}>
              <View style={[
                styles.avatarBorderContainer,
                { borderColor: isStorySeen ? '#dbdbdb' : '#c13584' }
              ]}>
                <Image source={require('./assets/images/person1.jpg')} style={styles.storyAvatar} />
              </View>
              <Text style={styles.storyText}>Alex</Text>
            </TouchableOpacity>

            <View style={styles.profileStory}>
              <View style={[styles.avatarBorderContainer, { borderColor: '#dbdbdb' }]}>
                <Image source={require('./assets/images/person2.jpg')} style={styles.storyAvatar} />
              </View>
              <Text style={styles.storyText}>Mateo</Text>
            </View>
            <View style={styles.profileStory}>
              <View style={[styles.avatarBorderContainer, { borderColor: '#dbdbdb' }]}>
                <Image source={require('./assets/images/person3.jpg')} style={styles.storyAvatar} />
              </View>
              <Text style={styles.storyText}>Pablo</Text>
            </View>
            <View style={styles.profileStory}>
              <View style={[styles.avatarBorderContainer, { borderColor: '#dbdbdb' }]}>
                <Image source={require('./assets/images/person4.jpg')} style={styles.storyAvatar} />
              </View>
              <Text style={styles.storyText}>Jesus</Text>
            </View>
            <View style={styles.profileStory}>
              <View style={[styles.avatarBorderContainer, { borderColor: '#dbdbdb' }]}>
                <Image source={require('./assets/images/person5.jpg')} style={styles.storyAvatar} />
              </View>
              <Text style={styles.storyText}>Diego</Text>
            </View>
            <View style={styles.profileStory}>
              <View style={[styles.avatarBorderContainer, { borderColor: '#dbdbdb' }]}>
                <Image source={require('./assets/images/person6.jpg')} style={styles.storyAvatar} />
              </View>
              <Text style={styles.storyText}>Samu</Text>
            </View>
            <View style={styles.profileStory}>
              <View style={[styles.avatarBorderContainer, { borderColor: '#dbdbdb' }]}>
                <Image source={require('./assets/images/person7.jpg')} style={styles.storyAvatar} />
              </View>
              <Text style={styles.storyText}>Max</Text>
            </View>
            <View style={styles.profileStory}>
              <View style={[styles.avatarBorderContainer, { borderColor: '#dbdbdb' }]}>
                <Image source={require('./assets/images/person8.jpg')} style={styles.storyAvatar} />
              </View>
              <Text style={styles.storyText}>Lalo</Text>
            </View>
            <View style={styles.profileStory}>
              <View style={[styles.avatarBorderContainer, { borderColor: '#dbdbdb' }]}>
                <Image source={require('./assets/images/person9.jpg')} style={styles.storyAvatar} />
              </View>
              <Text style={styles.storyText}>Richi</Text>
            </View>

          </ScrollView>
        </View>

        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Image source={require('./assets/images/person1.jpg')} style={styles.avatar} />
            <Text style={styles.usernameText}>Alex</Text>
          </View>
          <Image source={require('./assets/images/Icono_3_puntos.png')} style={styles.icon3Puntos} />
        </View>

        <View style={styles.postImageContainer}>
          <Image source={require('./assets/images/post.jpg')} style={styles.postImage} />
        </View>

        <View style={styles.actionsIcons}>
          <View style={styles.actionLeft}>
            <TouchableOpacity onPress={handleLikesAndColor}>
              <Image source={require('./assets/images/heart.png')} style={styles.iconMedium} tintColor={likeColor} />
            </TouchableOpacity>
            <Text style={styles.likesNumber}>{numberLikes}</Text>
            <Image source={require('./assets/images/comment.png')} style={styles.iconMedium} />
            <Text style={styles.likesNumber}>12</Text>
            <Image source={require('./assets/images/share.png')} style={styles.iconMedium} />
            <Text style={styles.likesNumber}>22</Text>
          </View>

          <View style={styles.paginationPuntos}>
            <Text style={{ color: '#3498db' }}>●</Text>
            <Text style={{ color: '#ccc' }}> ● ● ● ● </Text>
          </View>

          <TouchableOpacity onPress={handleSaveToggle}>
            <Image
              source={
                isSaved
                  ? require('./assets/images/guardar2.png')
                  : require('./assets/images/guardar.png')
              }
              style={styles.iconMedium}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.likesText}>{numberLikes} likes</Text>
          <Text style={styles.captionText}>
            <Text style={styles.boldText}>Alex</Text> De viaje por el mundo, encantado con este lugar <Text style={styles.blueText}>#viajar</Text>
          </Text>
          <Text style={styles.greyText}>View all 370 comments</Text>
          <Text style={styles.dateText}>1h ago</Text>
        </View>
        <View style={{ height: 20 }} />

      </ScrollView>

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
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  progressBarContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  progressBar: {
    flex: 1,
    height: 2,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  storyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginTop: 10,
  },
  storyUserInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storyHeaderAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  storyHeaderUsername: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 10,
  },
  storyTime: {
    color: '#ddd',
    fontSize: 14,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  storyContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  fullStoryImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  storyOverlayText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 8,
  },
  viewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewsText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 14,
  },
  header: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 10,
  },
  logoInstagram: {
    width: 110,
    height: 40,
    resizeMode: 'contain',
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
    resizeMode: 'contain',
    marginRight: 5,
  },
  postImageContainer: {
    width: '100%',
    height: 450,
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
    width: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
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
    backgroundColor: '#fff',
  },
  iconMenu: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },
  likesNumber: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 5,
    marginRight: 10,
  },
  storiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  avatarBorderContainer: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyAvatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: '#fff',
  },
  storyText: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: 'bold',
    color: '#606060ff',
  },
  profileStory: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
});