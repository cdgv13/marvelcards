import React, {useState} from 'react';
import {View, TouchableOpacity, Text, FlatList, StyleSheet} from 'react-native';
import {RootState} from '../redux-saga/_rootReducer';
import {useSelector} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
const _searchMarvel = ({navigation}: any) => {
  const [search, setSearch] = useState('');
  const [filterInfo, setFilterInfo] = useState<any[]>([]);

  const {superHeroesType} = useSelector(
    (state: RootState) => state.marvelSuperHeroes,
  );

  const clearFucntion = () => {
    setSearch('');
    setFilterInfo([]);
  };

  const filterFunction = async (superHero: string) => {
    const tempArr = [...superHeroesType];
    const filter = tempArr.filter(item => {
      return (
        item.name.toLocaleUpperCase().indexOf(superHero.toLocaleUpperCase()) >=
        0
      );
    });
    const result = [...filter];
    if (superHero === '') {
      setFilterInfo([]);
    } else {
      setFilterInfo(result);
    }
    setSearch(superHero);
  };

  const renderService = (item: any) => {
    return (
      <TouchableOpacity
        style={styles.rowStyle}
        onPress={() =>
          navigation.navigate('Specific Hero', {
            name: item.name,
            powerstats: item.powerstats,
            appearance: item.appearance,
            biography: item.biography,
            work: item.work,
            connections: item.connections,
            images: item.images,
          })
        }>
        <Text style={styles.textStyle}>{item.name}</Text>
        <Text style={[styles.textStyle]} ellipsizeMode="tail" numberOfLines={1}>
          number {item.id}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.searchContainer}>
          <Icon name="search" style={styles.iconSearch} />
          <TextInput
            style={styles.searchInput}
            onChangeText={text => filterFunction(text)}
            placeholder={'Super Hero'}
            value={search}
            autoFocus={true}
          />
          <TouchableOpacity onPress={clearFucntion}>
            <Icon name="close" style={styles.iconClose} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.titleEmisora}>Marvel</Text>
      <FlatList
        data={filterInfo}
        renderItem={({item}) => renderService(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  searchContainer: {
    borderWidth: 2,
    borderColor: '#DEDEDE',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    height: 40,
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  searchInput: {
    width: '83%',
    height: 35,
    fontSize: 12,
  },
  iconSearch: {
    fontSize: 24,
    marginLeft: 4,
    color: '#FF5000',
  },
  iconChevron: {
    fontSize: 34,
    marginRight: 4,
  },
  iconClose: {
    fontSize: 24,
    color: '#888682',
  },
  titleEmisora: {
    marginTop: 30,
    fontWeight: '700',
    fontSize: 18,
    color: '#262626',
    paddingHorizontal: 20,
  },
  rowStyle: {
    marginHorizontal: 20,
    height: 30,
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 2,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 12,
  },
});

export default _searchMarvel;
