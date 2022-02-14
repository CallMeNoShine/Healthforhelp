import * as React from 'react';
import { View, Text, ScrollView, SafeAreaView, StatusBar, StyleSheet, Card } from 'react-native';


export default function NewsScreen({navigation}) {
  return(
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollview}>
      <Text 
      onPress={() => navigation.navigate('Home')} 
      style={{ fontSize: 26, fontWeight: 'bold'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      <Text>Hello World</Text>
    </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollview: {
    backgroundColor: 'cyan',
    marginHorizontal: 20,
  },
})