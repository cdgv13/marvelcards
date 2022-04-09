import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {RootState} from '../redux-saga/_rootReducer';
import {getSaveSuperHero} from '../redux-saga/saveSuperHero/_saveSuperHeroSlice';
//Declare component favorite , this visualice if your select one carrd of initial list.
const _favoriteCard = () => {
  const dispatch = useDispatch();

  const {saveArr} = useSelector((state: RootState) => state.saveSuperHero);
  useEffect(() => {
    dispatch(getSaveSuperHero());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      {saveArr.length > 0 ? (
        <View style={styles.card_template}>
          <Image
            style={styles.card_image}
            source={{uri: saveArr[0].images.lg}}
          />
          <View style={styles.text_container}>
            <Text style={styles.name_text}>{saveArr[0].name}</Text>
            <Text style={styles.title_text}>Powerstats*</Text>
            <View style={styles.view_row}>
              <Text style={styles.card_number}>Intelligence</Text>
              <Text style={styles.card_number}>
                {saveArr[0].powerstats.intelligence}
              </Text>
              <Text style={styles.card_number}>Strength</Text>
              <Text style={styles.card_number}>
                {saveArr[0].powerstats.strength}
              </Text>
              <Text style={styles.card_number}>Speed</Text>
              <Text style={styles.card_number}>
                {saveArr[0].powerstats.speed}
              </Text>
              <Text style={styles.card_number}>Durability</Text>
              <Text style={styles.card_number}>
                {saveArr[0].powerstats.durability}
              </Text>
            </View>
            <Text style={styles.title_text}>Biography*</Text>
            <View style={styles.view_row}>
              <Text style={styles.card_number}>FullName</Text>
              <Text style={styles.card_number}>
                {saveArr[0].biography.fullName}
              </Text>
              <Text style={styles.card_number}>
                {saveArr[0].appearance.gender}
              </Text>
            </View>
            <View style={styles.view_row}>
              <Text style={styles.card_number}>FirstAppear</Text>
              <Text style={styles.card_number}>
                {saveArr[0].biography.firstAppearance}
              </Text>
            </View>
            <View style={styles.view_row}>
              <Text style={styles.card_number}>Work</Text>
              <Text style={styles.card_number}>
                {saveArr[0].work.occupation}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.centerText}>No se tiene carta Favorita</Text>
        </View>
      )}
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
  centerText: {
    textAlign: 'center',
  },
});
export default _favoriteCard;
