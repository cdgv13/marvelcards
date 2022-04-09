import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
//This component is the description for the card or name of hero than user select
const _specificSuperHero = ({route}: any) => {
  const {name, powerstats, appearance, biography, work, connections, images} =
    route.params;
  console.log(
    'El route trae',
    name,
    powerstats,
    biography,
    work,
    connections,
    images,
  );
  return (
    <View style={styles.container}>
      <View style={styles.card_template}>
        <Image style={styles.card_image} source={{uri: images.lg}} />
        <View style={styles.text_container}>
          <Text style={styles.name_text}>{name}</Text>
          <Text style={styles.title_text}>Powerstats*</Text>
          <View style={styles.view_row}>
            <Text style={styles.card_number}>Intelligence</Text>
            <Text style={styles.card_number}>{powerstats.intelligence}</Text>
            <Text style={styles.card_number}>Strength</Text>
            <Text style={styles.card_number}>{powerstats.strength}</Text>
            <Text style={styles.card_number}>Speed</Text>
            <Text style={styles.card_number}>{powerstats.speed}</Text>
            <Text style={styles.card_number}>Durability</Text>
            <Text style={styles.card_number}>{powerstats.durability}</Text>
          </View>
          <Text style={styles.title_text}>Biography*</Text>
          <View style={styles.view_row}>
            <Text style={styles.card_number}>FullName</Text>
            <Text style={styles.card_number}>{biography.fullName}</Text>
            <Text style={styles.card_number}>{appearance.gender}</Text>
          </View>
          <View style={styles.view_row}>
            <Text style={styles.card_number}>FirstAppear</Text>
            <Text style={styles.card_number}>{biography.firstAppearance}</Text>
          </View>
          <View style={styles.view_row}>
            <Text style={styles.card_number}>Work</Text>
            <Text style={styles.card_number}>{work.occupation}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  card_template: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    boxShadow: '10px 10px 17px -12px rgba(0,0,0,0.75)',
    //padding: 10,
  },
  card_image: {
    width: '100%',
    height: '100%',
  },
  text_container: {
    position: 'absolute',
    width: '100%',
    height: '30%',
    bottom: 0,
    padding: 5,
    backgroundColor: 'rgba(0,0,0, 0.3)',
  },
  card_number: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    marginRight: 10,
  },
  name_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  title_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginRight: 10,
    marginTop: 10,
  },
  view_row: {flexDirection: 'row'},
  saveButton: {
    backgroundColor: 'white',
  },
});
export default _specificSuperHero;
