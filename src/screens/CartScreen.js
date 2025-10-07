import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../api/Context';
import { addItemCartApi } from '../api/http';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

const CartScreen = () => {
  const navigation = useNavigation();
  const { cartItem, itemQuantity, setItemQuantity } = useContext(AppContext);
  const [isSelected, setIsSelected] = useState([]);

  console.log(`Seleced Id and items`, isSelected);

  const handleSelectedItem = id => {
    setIsSelected(bsdk =>
      bsdk.includes(id) ? bsdk.filter(i => i !== id) : [...bsdk, id],
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#eff8f1ff' }}
      edges={['top', 'bottom']}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductScreen')}
          >
            <Icon name="arrow-back" size={26} color="#000" />
          </TouchableOpacity>
          <Text style={{ fontSize: 22, fontWeight: '700' }}>My Cart</Text>
          <TouchableOpacity>
            <Icon name="ellipsis-vertical" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        {cartItem && cartItem.length > 0 ? (
          <>
            <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 24 }}>
              {cartItem.length} items
            </Text>
            {
              <FlatList
                data={cartItem}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.CartWrapper}>
                    <View
                      style={{
                        flex: 0.1,
                        alignContent: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <CheckBox
                        value={isSelected.includes(item.id)}
                        onValueChange={() => handleSelectedItem(item.id)}
                      />
                    </View>
                    <View style={styles.itemWrapper}>
                      <View
                        style={{
                          flex: 0.4,
                          backgroundColor: '#fff',
                          borderRadius: 20,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Image
                          source={{ uri: item.thumbnail }}
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                          }}
                          resizeMode="cover"
                        />
                      </View>
                      <View style={{ flex: 0.6 }}>
                        <Text
                          numberOfLines={2}
                          style={{
                            fontSize: 16,
                            fontWeight: '600',
                            paddingLeft: 16,
                            paddingTop: 16,
                            flexWrap: 'wrap',
                            width: 180,
                          }}
                        >
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '600',
                            paddingLeft: 16,
                            color: 'grey',
                          }}
                        >
                          Quantity: {item.quantity}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            paddingLeft: 16,
                            marginTop: 25,
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                          }}
                        >
                          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                            ${item.price}
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-evenly',
                              flex: 1,
                              marginLeft: 20,
                              alignItems: 'center',
                            }}
                          >
                            <TouchableOpacity
                              onPress={
                                itemQuantity > 1
                                  ? () => setItemQuantity(itemQuantity - 1)
                                  : null
                              }
                              style={{
                                height: 30,
                                width: 30,
                                backgroundColor: '#fff',
                                borderRadius: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Text style={{ fontSize: 20, color: '#000' }}>
                                -
                              </Text>
                            </TouchableOpacity>

                            <Text
                              style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginHorizontal: 10,
                              }}
                            >
                              {itemQuantity}
                            </Text>
                            <TouchableOpacity
                              onPress={() => setItemQuantity(itemQuantity + 1)}
                              style={{
                                height: 30,
                                width: 30,
                                backgroundColor: '#0ed142ff',
                                borderRadius: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Text
                                style={{
                                  fontSize: 20,
                                  color: '#fff',
                                }}
                              >
                                +
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity style={styles.deleteIcon}>
                      <Icon
                        name="trash-outline"
                        size={20}
                        style={{ color: 'red', padding: 5 }}
                      />
                    </TouchableOpacity>
                  </View>
                )}
                showsVerticalScrollIndicator={false}
              />
            }
          </>
        ) : (
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={{ fontSize: 24, fontWeight: '500' }}>
              {' '}
              Your Cart is empty !{' '}
            </Text>
          </View>
        )}
      </View>
      <View style={{ backgroundColor: '#fff', borderRadius: 16 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 10,
          }}
        >
          <Text style={{ fontSize: 18 }}>Subtotal: </Text>
          <Text style={{ fontSize: 18 }}>$299.00 </Text>
        </View>
        <View style={{ padding: 16 }}>
          <TouchableOpacity style={styles.buyBtn}>
            <Text style={styles.buyTxt}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CartWrapper: {
    flexDirection: 'row',
    marginTop: 16,
    // backgroundColor: 'red',
    height: 150,
  },
  itemWrapper: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    flex: 0.9,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#fff',
    padding: 6,
    position: 'relative',
  },
  deleteIcon: {
    position: 'absolute',
    right: 2,
    top: 1,
    borderWidth: 4,
    borderRadius: 20,
    borderColor: '#ffffffff',
    backgroundColor: '#f5f5f5',
  },
  buyBtn: {
    backgroundColor: '#0ed142ff',
    borderRadius: 24,
    alignItems: 'center',
  },
  buyTxt: { color: '#fff', fontSize: 16, fontWeight: 'bold', padding: 16 },
});
