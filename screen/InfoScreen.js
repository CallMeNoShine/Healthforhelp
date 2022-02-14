import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TouchableHighlight } from 'react-native-web';

const medicalInfo = [
  {
    image: "https://source.unsplash.com/user/erondu/1600x900",
    name: "พาราเซตามอล 500mg",
    feature: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    type: "ยาประจำบ้าน"
  },
  {
    image: "https://source.unsplash.com/user/erondu/1600x900",
    name: "แก้ปวดท้อง",
    feature: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    type: "ยาประจำบ้าน"
  },
  {
    image: "https://source.unsplash.com/user/erondu/1600x900",
    name: "ยาแก้ปวด",
    feature: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    type: "ยาประจำบ้าน"
  },
]

export default function InfoScreen({navigation}) {
  return(
  <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text>Test</Text>
      </View>
  </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'cyan',
    width: 350,
    height: 250
  },
  container: {
    flex: 1,
    marginTop: 20,
    padding: 35
  }
})