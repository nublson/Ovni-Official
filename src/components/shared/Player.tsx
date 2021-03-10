import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {usePlayer} from '../../hooks';

const Widget: React.FC = () => {
  const {navigate} = useNavigation();
  const {isPlaying, playTrack, currentTrack} = usePlayer();

  return (
    <RectButton
      onPress={() => {
        navigate('Player');
      }}>
      <View style={[styles.music, !currentTrack && {display: 'none'}]}>
        <View style={styles.musicData}>
          <Image
            source={{uri: currentTrack?.artwork}}
            style={styles.musicCover}
          />
          <View style={styles.musicInfo}>
            <Text style={styles.musicTitle}>{currentTrack?.title}</Text>
            <Text
              style={
                styles.musicAuthor
              }>{`${currentTrack?.Artist.name} • ${currentTrack?.Album.title}`}</Text>
          </View>
        </View>

        <View style={styles.iconGroup}>
          <BorderlessButton onPress={playTrack}>
            {isPlaying ? (
              <Icon name="ios-pause" size={30} color="black" />
            ) : (
              <Icon name="ios-play" size={30} color="black" />
            )}
          </BorderlessButton>
        </View>
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  music: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#efefef',
    padding: 10,
    zIndex: 10,
  },
  musicData: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    zIndex: 20,
  },
});

export default {
  Widget,
};
