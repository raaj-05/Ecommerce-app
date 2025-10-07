import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window');

const DetailsWrapper = ({ product }) => {
  const stockAvailable = product.stock > 0;

  const starRating = ({ rating }) => {
    const maxStar = 5;
    let stars = '';
    for (let i = 0; i < maxStar; i++) {
      if (i < rating) {
        // Change the condition here
        stars += '⭐';
      } else {
        stars += ' ';
      }
    }
    return stars;
  };
  return (

      <View style={styles.detailsWrapper}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' , marginTop:"6%"}}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            {product.brand}
          </Text>
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
        <Text style={{ fontSize: 18, fontWeight: '400', marginTop: 6 }}>
          {product.title}
        </Text>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            $ {product.price}
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginLeft: 8,
              color: 'blue',
              padding: 4,
              backgroundColor: '#efefefff',
              borderRadius: 4,
            }}
          >
            {product.discountPercentage}% off
          </Text>
        </View>
        <Text style={{ fontSize: 18, marginTop: 8 }}>
          {product.description}
        </Text>
        <Text style={{ fontSize: 16, marginTop: 6, fontWeight: '500' }}>
          {product.shippingInformation}
        </Text>
        <View style={styles.detailsList}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 8 }}>
            Details :
          </Text>
          <Text style={{ fontSize: 16, marginTop: 6 }}>
            Warranty: {product.warrantyInformation}
          </Text>
          <Text style={{ fontSize: 16, marginTop: 6 }}>
            Width: {product.dimensions.width}cm
          </Text>
          <Text style={{ fontSize: 16, marginTop: 6 }}>
            Height: {product.dimensions.height}cm
          </Text>
          <Text style={{ fontSize: 16, marginTop: 6 }}>
            Depth: {product.dimensions.depth}cm
          </Text>
          <Text style={{ fontSize: 16, marginTop: 6 }}>
            Weight: {product.weight} g
          </Text>
          <Text style={{ fontSize: 16, marginTop: 6 }}>
            {product.returnPolicy}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 8 }}>
            Product Reviews:{' '}
          </Text>
          {product.reviews.map((review, index) => (
            <View key={index} style={styles.review}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                  {review.comment}
                </Text>
                <Text style={{ fontSize: 16, marginTop: 2 }}>
                  {review.reviewerName}
                </Text>
              </View>
              <Text>{starRating({ rating: review.rating })}</Text>
            </View>
          ))}
        </View>
      </View>
    
  );
};

export default DetailsWrapper;

const styles = StyleSheet.create({
  detailsWrapper: {
    marginTop:"10",
    backgroundColor: '#fff',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    borderRadius:20
  },
  stockTxt: {
    fontSize: 18,
  },
  review: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
    backgroundColor: '#efefefff',
    padding: 10,
    borderRadius: 8,
  },
});
