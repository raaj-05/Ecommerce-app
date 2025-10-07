import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import {
  addItemCartApi,
  getDetailsOfProduct,
  searchProduct,
} from '../api/http';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../api/Context';
import Loader from '../components/Loader';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductScreen = () => {
  const { cartItem, setCartItem,itemQuantity, setItemQuantity} = useContext(AppContext);
  const navigation = useNavigation();
  const { loader, setLoader } = useContext(AppContext);
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

  const loadData = async () => {
    if (search !== '') return;
    setLoader(true);
    const data = await getDetailsOfProduct(limit, skip);
    setItem(prev => [...prev, ...data.products]);
    setLoader(false);
  };

  // useEffect(() => {
  //   if (search === '') {
  //     setItem([]);
  //     setSkip(0);
  //   } else if (search.length >= 3) {
  //     searchProducts();
  //   }
  // }, [search]);

  useEffect(() => {
    if (search === '') {
      loadData();
    }
  }, [skip]);

  const searchProducts = async () => {
    if (search.length < 3) return;
    setLoader(true);
    const data = await searchProduct(search);
    setItem(data.products);
    setLoader(false);
  };

  const loadMore = () => {
    if (!loader && search === '') {
      setSkip(prev => prev + limit);
    }
  };
  const detailsOfProduct =( item) => {
    navigation.navigate('ProductDetailScreen', { product: item });
  };
  const addToCart = async item => {
    const Data = await AsyncStorage.getItem('userData');
    const userData = JSON.parse(Data);
    const userId = userData.id;
    const itemId = item.id;
    const finalData = { userId, itemId };
    const response = await addItemCartApi(finalData);
    if (cartItem.length == 0) {
      setCartItem(prev => [...prev, ...response.products]);
    } else {
      const existingItemId = cartItem.map(element => element.id);
      if (existingItemId.includes(itemId)) {
        const updateCart = cartItem.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
        );
        setCartItem(updateCart);
        
      } else {
        setCartItem(prev => [...prev, ...response.products]);
      }
    }
    Alert.alert('Item added');
  };
  useEffect(() => {
    console.log('Updated cart state:', cartItem);
  }, [cartItem]);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#eff8f1ff' }}
      edges={['top']}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={{ padding: 16, flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.backArrow}>
            <Pressable onPress={() => navigation.navigate('HomeScreen')}>
              <Icon name="arrow-back" size={24} color="#000" />
            </Pressable>
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Search items"
              placeholderTextColor="black"
              style={styles.input}
              value={search}
              onChangeText={e => {
                setSearch(e);
              }}
            />
            <Pressable style={styles.searchIcon} onPress={searchProducts}>
              <Icon name="search" size={22} color="#000" />
            </Pressable>
          </View>
        </View>

        {loader && item.length === 0 ? (
          <Loader />
        ) : (
          <FlatList
            data={item}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View>
                <ProductItem
                  product={item}
                  detailsOfProduct={() => detailsOfProduct(item)}
                  addToCart={() => addToCart(item)}
                />
              </View>
            )}
            style={{ marginTop: 20 }}
            contentContainerStyle={{ paddingBottom: 1 }}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={loader && item.length > 0 ? <Loader /> : null}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
export default ProductScreen;

const styles = StyleSheet.create({
  backArrow: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    elevation: 2,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  inputWrapper: {
    flex: 1,
    position: 'relative',
  },
  input: {
    height: 50,
    borderRadius: 25,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 40,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  searchIcon: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -11 }],
  },
});
