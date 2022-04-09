import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import _marvelCardsFavorite from '../Components/_favoriteCard';
import _marvelCards from '../Components/_marvelCards';
import _searchMarvel from '../Components/_searchMarvel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _specificSuperHero from '../Components/_specificSuperHero';
const Stack = createStackNavigator();

//Declare diferentes stack for stack navigation
export const HomeStackScreen = ({navigation}: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: () => (
          <View style={styles.logo}>
            <Image
              style={styles.logo}
              source={require('./../assets/marvel.png')}
            />
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Search Marvel');
            }}>
            <View>
              <Icon name="search" color="#888682" style={styles.iconLeft} />
            </View>
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen name="MarvelCards" component={_marvelCards} />
      <Stack.Screen name="Search Marvel" component={_searchMarvel} />
      <Stack.Screen name="Specific Hero" component={_specificSuperHero} />
    </Stack.Navigator>
  );
};
export const CardFavoriteStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => (
          <View style={styles.logo}>
            <Image
              style={styles.logo}
              source={require('./../assets/marvel.png')}
            />
          </View>
        ),
      }}
      initialRouteName="MarvelCardsFavorite">
      <Stack.Screen
        name="MarvelCardsFavorite"
        component={_marvelCardsFavorite}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 40,
    justifyContent: 'center',
  },
  iconLeft: {
    fontSize: 32,
    marginLeft: 20,
  },
});
