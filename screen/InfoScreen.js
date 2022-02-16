import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const medicalInfo = [
  {
    id: 1,
    image: require('../assets/medicine1.jpg'),
    name: "พาราเซตามอล 500mg",
    feature: "Lorem Ipsum is simply dummy text of the printing",
    type: "ยาประจำบ้าน1"
  },
  {
    id: 2,
    image: require('../assets/medicine2.jpg'),
    name: "แก้ปวดท้อง",
    feature: "Lorem Ipsum is simply dummy text ",
    type: "ยาประจำบ้าน2"
  },
  {
    id: 3,
    image: require('../assets/medicine3.jpg'),
    name: "ยาแก้ปวด",
    feature: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    type: "ยาประจำบ้าน3"
  },
  {
    id: 4,
    image: require('../assets/medicine4.jpg'),
    name: "ยาเจ็บคอ",
    feature: "Lorem Ipsum",
    type: "ยาประจำบ้าน4"
  },
  {
    id: 5,
    image: require('../assets/medicine5.jpg'),
    name: "ยาลดไข้",
    feature: "Lorem Ipsum is simply dummy text of the printing",
    type: "ยาประจำบ้าน5"
  },
]

//Component
import InfoCard from '../components/InfoCard';

export default function InfoScreen() {
  return(
    <View style={styles.container}>
      {/* <InfoCard /> */}

      <FlatList
        data={medicalInfo}
        renderItem={({item}) => {
          return <InfoCard info={item} />
        }}
        keyExtractor={(medicalInfo) => medicalInfo.id.toString()}
        showsVerticalScrollIndicator={false}
        />
    </View>
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
    alignItems:'center',
    marginVertical: 15
  }
})