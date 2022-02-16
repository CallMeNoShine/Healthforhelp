import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

export default function InfoCard({info}) {
    const {name, feature, type, image} = info;

    return(
    <View style={styles.container}>
        <View style={styles.cardContainer}>
            <Image style={styles.imageStyle} source={image} />
            <View style={styles.infoStyle}>
                <Text style={styles.titleStyle}>{name}</Text>
                <View style={styles.descriptionStyle}>
                    <Text>{feature}</Text>
                    <Text>{type}</Text>
                </View>
            </View>
        </View>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 45;
const CardRadius = 20;
const styles = StyleSheet.create({
    container: {
        width: deviceWidth - 20,
        alignItems: 'center'
    },
    cardContainer: {
        backgroundColor: 'cyan',
        width: deviceWidth - offset,
        borderRadius: CardRadius,
        height: 250,

        shadowColor: 'black',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
        marginVertical: 10
    },
    imageStyle: {
        width: deviceWidth - offset,
        height: 150,
        borderTopLeftRadius: CardRadius,
        borderTopRightRadius: CardRadius
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 800,
    },
    descriptionStyle: {
        fontWeight: '200',
        marginLeft: 5,
        marginTop: 7
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5
    }
});