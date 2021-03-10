import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Platform} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';

interface DefaultHeaderProps {
  title: string;
}

interface AlbumHeaderProps {
  artwork?: string;
  title?: string;
  artist?: string;
}

const Auth: React.FC<DefaultHeaderProps> = ({title}) => {
  const {goBack} = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <View style={styles.header}>
      <BorderlessButton onPress={handleGoBack}>
        <Icon name="ios-arrow-back" size={32} color="black" />
      </BorderlessButton>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const App: React.FC<DefaultHeaderProps> = ({title}) => {
  return (
    <View style={styles.appHeader}>
      <Text style={styles.appHeaderTitle}>{title}</Text>
    </View>
  );
};

const Album: React.FC<AlbumHeaderProps> = ({artwork, title, artist}) => {
  const {goBack} = useNavigation();

  return (
    <View style={styles.albumHeader}>
      <ImageBackground
        style={styles.albumBackground}
        source={{
          uri: artwork
            ? artwork
            : 'https://www.ultimatesource.toys/wp-content/uploads/2013/11/dummy-image-landscape-1.jpg',
        }}>
        <View style={styles.albumHeaderContent}>
          <BorderlessButton
            style={styles.albumHeaderButton}
            onPress={() => {
              goBack();
            }}>
            <Icon name="ios-arrow-back-outline" size={24} color="white" />
          </BorderlessButton>

          <View style={styles.albumHeaderFooter}>
            <Text style={styles.albumHeaderTitle}>{title && title}</Text>
            <Text style={styles.albumHeaderAuthor}>{artist && artist}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 36,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    marginTop: 20,
    width: '60%',
  },
  albumHeader: {
    width: '100%',
    height: Platform.OS === 'ios' ? 395 : 300,
  },
  albumBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumHeaderContent: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 30,
  },
  albumHeaderButton: {
    marginTop: Platform.OS === 'ios' ? 25 : 10,
    alignSelf: 'flex-start',
  },
  albumHeaderFooter: {
    width: '100%',
    alignItems: 'center',
  },
  albumHeaderTitle: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    textTransform: 'capitalize',
    maxWidth: '70%',
    textAlign: 'center',
  },
  albumHeaderAuthor: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textTransform: 'capitalize',
    maxWidth: '50%',
    textAlign: 'center',
  },
  appHeader: {
    width: '100%',
    marginBottom: 25,
    paddingHorizontal: 13,
  },
  appHeaderTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
  },
});

export default {
  Auth,
  Album,
  App,
};
