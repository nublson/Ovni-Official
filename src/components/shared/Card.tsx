import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';

import {usePlayer} from '../../hooks';

import {AlbumProps, CardProps, UserProps, TrackProps} from '../../utils/types';
import {BorderlessButton} from 'react-native-gesture-handler';

interface IMusic {
  music: TrackProps;
}

interface IAlbum {
  album: AlbumProps;
}

interface ISimpleCard {
  card: CardProps;
}

interface IUserProps {
  user: UserProps | null;
}

interface IOptionProps extends TouchableOpacityProps {
  name: string;
}

const Music: React.FC<IMusic> = ({music}) => {
  const {skipTrack} = usePlayer();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        skipTrack(music.id);
      }}>
      <View style={styles.card}>
        <Image source={{uri: music.artwork}} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{music.title}</Text>
            <Icon name="ios-heart-outline" size={16} color="black" />
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.cardAuthor}>{music.Artist.name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const MusicList: React.FC<IMusic> = ({music}) => {
  const {skipTrack} = usePlayer();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        skipTrack(music.id);
      }}>
      <View style={styles.music}>
        <View style={styles.musicData}>
          <Image source={{uri: music.artwork}} style={styles.musicCover} />
          <View style={styles.musicInfo}>
            <Text style={styles.musicTitle}>{music.title}</Text>
            <Text style={styles.musicAuthor}>
              {music.Artist.name} • {music.Album.title}
            </Text>
          </View>
        </View>

        <View style={styles.iconGroup}>
          <BorderlessButton
            onPress={() => {
              console.log('Liked');
            }}>
            {music.rating ? (
              <Icon name="ios-heart" size={24} color="black" />
            ) : (
              <Icon name="ios-heart-outline" size={24} color="black" />
            )}
          </BorderlessButton>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const Album: React.FC<IAlbum> = ({album}) => {
  const {navigate} = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigate('Album', {album_id: album.id});
      }}>
      <View style={styles.card}>
        <Image source={{uri: album.artwork}} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{album.title}</Text>
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.cardAuthor}>{album.Artist.name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const SimpleCard: React.FC<ISimpleCard> = ({card}) => {
  const {navigate} = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigate('Artist', {
          artist_id: card.id,
        });
      }}>
      <View style={styles.card}>
        <Image source={{uri: card.artwork}} style={styles.simpleCardImage} />
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{card.name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const User: React.FC<IUserProps> = ({user}) => {
  return (
    <View style={styles.user}>
      <View style={styles.userInfo}>
        <View style={styles.userData}>
          <Text style={styles.userName}>{user?.attributes.name}</Text>
          <Text style={styles.userPlan}>Premium</Text>
        </View>
      </View>
      <Icon name="ios-arrow-forward" size={20} color="black" />
    </View>
  );
};

const Option: React.FC<IOptionProps> = ({name, ...rest}) => {
  return (
    <TouchableOpacity {...rest} style={styles.option}>
      <Text style={styles.optionName}>{name}</Text>
      <Icon name="ios-arrow-forward" size={20} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 128,
    height: 172,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 15,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardImage: {
    width: 108,
    height: 108,
    borderRadius: 10,
  },
  simpleCardImage: {
    width: 108,
    // height: 108,
    flex: 1,
    borderRadius: 10,
  },
  cardContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#000',
    marginTop: 5,
  },
  cardFooter: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardAuthor: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#8d8d8d',
  },
  music: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
  },
  musicData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  musicCover: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 10,
  },
  musicInfo: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  musicTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
  musicAuthor: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#8d8d8d',
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  user: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  userImage: {
    width: 43,
    height: 43,
    borderRadius: 10,
    marginRight: 10,
  },
  userData: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  userName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#000',
  },
  userPlan: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#8d8d8d',
  },
  option: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
  },
  optionName: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    fontSize: 14,
  },
});

export default {
  Music,
  Album,
  MusicList,
  SimpleCard,
  User,
  Option,
};
