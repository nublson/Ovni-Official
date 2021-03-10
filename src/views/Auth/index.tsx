import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';

const Authentication: React.FC = () => {
  const {navigate} = useNavigation();

  const handleNavigate = (screen: string) => {
    navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} />

      <View style={styles.content}>
        {Platform.OS === 'ios' ? (
          <TouchableOpacity
            onPress={() => {
              console.log('Apple');
            }}
            style={styles.button}>
            <Text style={styles.text}>Sign in with Apple</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              handleNavigate('SignIn');
            }}
            style={styles.button}>
            <Text style={styles.text}>Sign in</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={() => {
            handleNavigate('SignUp');
          }}
          style={[styles.button, styles.buttonMain]}>
          <Text style={[styles.text, styles.textMain]}>Sign up</Text>
        </TouchableOpacity>

        {Platform.OS !== 'android' && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <BorderlessButton
              onPress={() => {
                handleNavigate('SignIn');
              }}>
              <Text style={styles.signIn}>Sign in</Text>
            </BorderlessButton>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingHorizontal: 30,
  },
  logo: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 64,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 10 : 20,
  },
  button: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonMain: {
    backgroundColor: '#000',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#000',
  },
  textMain: {
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    marginTop: 10,
  },
  footerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  signIn: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
});

export {Authentication};
