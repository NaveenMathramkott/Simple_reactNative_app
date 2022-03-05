import {StyleSheet, SafeAreaView, View, ScrollView} from 'react-native';

import React from 'react';
import NavHeader from './DetailsComponent/NavHeader';
import ContentCard from './DetailsComponent/ContentCard';
import BuyButton from './DetailsComponent/BuyButton';
import Rating from './DetailsComponent/Rating';

const Details = ({navigation, route}) => {
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <ScrollView>
        <View style={{width: 330}}>
          <NavHeader title="Movies" backTo="Home" navigation={navigation} />
          <ContentCard
            cardImage={route.params.image}
            cardTitle={route.params.title}
            cardSubTitle={route.params.year}
            cardPara={route.params.crew}
          />
          <View>
            <View style={{paddingTop: 30}}>
              <Rating
                image={route.params.image}
                title={route.params.title}
                subTitle={route.params.imDbRatingCount}
                rating={route.params.imDbRating}
              />
            </View>
            <View style={{paddingTop: 20, marginTop: 30}}>
              <BuyButton buttonText="Buy" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({});
