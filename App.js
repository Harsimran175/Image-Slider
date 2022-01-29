import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

export default class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water', 
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree',
      ],
    }; 
  }
  render() {
    return ( 
      <View style={{ flex: 1 }}>
        <SliderBox 
        ImageComponentStyle={{alignSelf:'center', width:'80%', marginTop:30 }}
          images={this.state.images}
          sliderBoxHeight={400} 
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 15,
            marginHorizontal: 10,
            padding: 0,
            margin: 0,
          }}
        />
      </View>
    );
  }
}
