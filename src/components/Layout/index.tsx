import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../shared';

interface AppLayoutProps {
  title: string;
}

export const LayAuth: React.FC = ({children}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>{children}</View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export const SafeArea: React.FC = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};

export const AppContainer: React.FC = ({children}) => {
  return <View style={styles.appContainer}>{children}</View>;
};

export const AppLayout: React.FC<AppLayoutProps> = ({children, title}) => {
  return (
    <SafeArea>
      <AppContainer>
        <Header.App title={title} />
        <ScrollView style={styles.appContent}>{children}</ScrollView>
      </AppContainer>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  appContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  appContent: {
    width: '100%',
  },
});
