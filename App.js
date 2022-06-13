import * as React from 'react';
import { Image, View, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const ImageProfileGithub = 'https://avatars.githubusercontent.com/u/100726930?v=4';
const urlGithub = 'https://github.com/marcelossp01';

export default function App() {
  const handePressGoGithub = async ()=> {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlGithub);
    if(res) {
     console.log('Link aprovado');
     console.log('Abrindo o link...');
      await Linking.openURL(urlGithub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
    <StatusBar backgroundColor={'#010409'} barStyle='light-content' />
    <View style={style.content}>
    <Image style={style.avatar} 
    source={{uri: ImageProfileGithub}} />
    <Text accessibilityLabel = 'nome: Marcelo Santos' 
    style={[style.defaultText, style.name]}>Marcelo Santos</Text>
    <Text accessibilityLabel = 'nickname: Marcelo Santos'
    style={[style.defaultText, style.nickname]}>marcelossp01</Text>
    <Text accessibilityLabel = 'descrição: Marcelo Santos'
    style={[style.defaultText, style.description]}>Cursando Analise e Desenvolvimento de Sistemas - Senac-SP
    </Text>

    <Pressable onPress={()=>console.log('urlGithub')}>
    <View style={style.button}>
    <Text>Open in GitHub</Text>
    </View>
    </Pressable>
    </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#010409',
    padding: 8,
  },
  content: {
    alignItems: 'center',
  padding: 20,
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: 'white',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 18,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
  },
    button: {
      marginTop: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16
  }
});
