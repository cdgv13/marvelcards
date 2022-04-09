import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMarvelSuperHeroes} from '../redux-saga/marvelSuperHeroes/_marvelSuperHeroesSlice';
import {RootState} from '../redux-saga/_rootReducer';
import {setSaveSuperHero} from '../redux-saga/saveSuperHero/_saveSuperHeroSlice';
//Initial list of cards for all marvel super heroes
const _marvelCards = ({navigation}: any) => {
  const dispatch = useDispatch();

  const {superHeroesType} = useSelector(
    (state: RootState) => state.marvelSuperHeroes,
  );
  useEffect(() => {
    dispatch(getMarvelSuperHeroes());
  }, [dispatch]);
  const listSuperHeroes = ({item, index}: any) => {
    const {name, images} = item;
    console.log('Las iamgen es', images.lg);
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Specific Hero', {
            name: item.name,
            powerstats: item.powerstats,
            appearance: item.appearance,
            biography: item.biography,
            work: item.work,
            connections: item.connections,
            images: item.images,
          });
          dispatch(
            setSaveSuperHero([
              {
                name: item.name,
                powerstats: item.powerstats,
                appearance: item.appearance,
                biography: item.biography,
                work: item.work,
                connections: item.connections,
                images: item.images,
              },
            ]),
          );
        }}>
        <View style={styles.card_template}>
          <Image style={styles.card_image} source={{uri: images.md}} />
          <View style={styles.text_container}>
            <View style={styles.view_row}>
              <Text style={styles.card_number}>{index + 1}</Text>
              <Text style={styles.card_number}>{name}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={superHeroesType}
        keyExtractor={(item: any) => item.id}
        renderItem={listSuperHeroes}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  card_template: {
    width: 250,
    height: 300,
    boxShadow: '10px 10px 17px -12px rgba(0,0,0,0.75)',
    padding: 10,
  },
  card_image: {
    width: 250,
    height: '100%',
  },
  text_container: {
    position: 'absolute',
    width: 250,
    height: '30%',
    bottom: 0,
    padding: 5,
    backgroundColor: 'rgba(0,0,0, 0.3)',
  },
  card_number: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },
  view_row: {flexDirection: 'row'},
});

export default _marvelCards;
