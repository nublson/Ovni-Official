import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Track} from 'react-native-track-player';

import {AlbumProps, CardProps} from '../../utils/types';
import Card from './Card';

interface ISectionMusicProps {
  title: string;
  data: Track[];
}

interface ISectionAlbumProps {
  title: string;
  data: AlbumProps[];
}

interface ISectionCardProps {
  title: string;
  data: CardProps[];
}

interface IMusicListProps {
  title: string;
  musics: Track[] | null;
}

const MusicCategory: React.FC<ISectionMusicProps> = ({title, data}) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>

      <FlatList
        horizontal
        style={styles.sectionContent}
        data={data}
        renderItem={({item}) => <Card.Music key={item.id} music={item} />}
        keyExtractor={({id}) => id}
      />
    </View>
  );
};

const AlbumCategory: React.FC<ISectionAlbumProps> = ({title, data}) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>

      <FlatList
        horizontal
        style={styles.sectionContent}
        data={data}
        renderItem={({item}) => <Card.Album key={item.id} album={item} />}
        keyExtractor={({id}) => id}
      />
    </View>
  );
};

const CardCategory: React.FC<ISectionCardProps> = ({title, data}) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>

      <FlatList
        horizontal
        style={styles.sectionContent}
        data={data}
        renderItem={({item}) => <Card.SimpleCard key={item.id} card={item} />}
        keyExtractor={({id}) => id}
      />
    </View>
  );
};

const MusicList: React.FC<IMusicListProps> = ({title, musics}) => {
  return (
    <View style={styles.sectionList}>
      <View style={styles.sectionListHeader}>
        <Text style={styles.sectionListTitle}>{title}</Text>
      </View>

      <View style={styles.sectionListContent}>
        {musics?.length ? (
          musics.map((music) => <Card.MusicList key={music.id} music={music} />)
        ) : (
          <Text style={styles.sectionListEmptyMessage}>Empty</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    width: '100%',
    marginBottom: 20,
  },
  sectionHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb',
    paddingHorizontal: 13,
  },
  sectionTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
  sectionContent: {
    width: '100%',
    height: 210,
    flexDirection: 'row',
    paddingBottom: 10,
  },
  sectionList: {
    width: '100%',
    paddingHorizontal: 13,
  },
  sectionListHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionListTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  sectionListContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sectionListEmpty: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionListEmptyMessage: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#8D8D8D',
  },
});

export default {
  MusicCategory,
  AlbumCategory,
  CardCategory,
  MusicList,
};
