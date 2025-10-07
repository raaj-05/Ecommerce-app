import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import DetailsWrapper from '../components/DetailsWrapper';

const { width } = Dimensions.get('window');

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageView}>
          <FlatList
            data={product.images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.toString()}
            renderItem={({ item }) => (
              <View style={styles.imageWrapper}>
                {/* <View
                  style={{
                    height: 350,
                    width: 350,
                    backgroundColor: '#ffffff',
                    borderRadius: 8,
                    elevation: 1,
                  }}
                > */}
                <Image source={{ uri: item }} style={styles.imageStyle} />
                {/* </View> */}
              </View>
            )}
          />
        </View>

        <DetailsWrapper product={product} />
      </ScrollView>
      <TouchableOpacity style={styles.buyBtn}>
        <Text style={styles.buyTxt}>Buy now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#b4d7d9',
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '12%',
    borderRadius: 16,
  },
  imageWrapper: {
    height: 350,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  buyBtn: {
    backgroundColor: '#000',
    padding: 16,
    margin: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buyTxt: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
