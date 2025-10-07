import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import React from 'react';

const ProductItem = ({ product, detailsOfProduct, addToCart }) => {
  const rawTag = product.tags.length > 1 ? product.tags[1] : product.tags[0];
  const tag = rawTag.charAt(0).toUpperCase() + rawTag.slice(1).toLowerCase();
  const stockAvailable = product.stock > 0;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={detailsOfProduct}
        style={{ flexDirection: 'row', flex:1}}
      >
        <View style={styles.imageView}>
          <Image
            source={{ uri: product.thumbnail }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.detailsView}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            {product.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: 'grey',
              marginTop: 1,
            }}
          >
            {tag}
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View style={styles.priceBox}>
              <Text
                style={{
                  marginRight: 16,
                  fontWeight: 'bold',
                  color: '#036e20ff',
                }}
              >
                $ {product.price}
              </Text>
            </View>
            <Text style={styles.discountTxt}>
              {product.discountPercentage}%
            </Text>
          </View>

          <View style={{ marginBottom: 0.5 }}>
            {stockAvailable ? (
              <Text
                style={[
                  styles.stockTxt,
                  { color: stockAvailable ? 'green' : 'red' },
                ]}
              >
                In Stock
              </Text>
            ) : (
              <Text
                style={[
                  styles.stockTxt,
                  { color: stockAvailable ? 'green' : 'red' },
                ]}
              >
                Out of Stock
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={addToCart}>
        <View style={styles.addBtn}>
          <Text style={{ color: '#fff', fontSize: 20 }}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 160,
    borderWidth: 2,
    marginTop: 5,
    borderRadius: 16,
    borderColor: 'green',
    padding: 2,
    position: 'relative',
  },
  imageView: {
    flex: 0.4,
    borderRadius: 16,
    backgroundColor: '#efefefff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtn: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    backgroundColor: 'green',
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 2,
  },
  detailsView: {
    flex: 0.6,
    padding: 10,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  stockTxt: {
    fontSize: 16,
  },
  priceBox: {
    backgroundColor: '#c6f8d3ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 2,
    paddingLeft: 15,
  },
  discountTxt: {
    color: 'white', 
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center', 
    textAlignVertical: 'center', 
    lineHeight: 30,
    marginLeft: 8, 
  },
});

{
  /* <Text style={{fontSize:20}}>{product.title}</Text>
<Text style={{fontSize:20}}>{product.id}</Text> */
}
