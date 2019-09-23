import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Background extends Component {
    render() {
      return (
        // Try setting `flexDirection` to `column`.
        <View style={styles.container}>
            <ImageBackground source={require('./skybg.jpeg')} style={styles.backdrop}>
            <Text>Zip code is {this.props.zipCode}.</Text>
            <Forecast {...this.state.forecast} />
            </ImageBackground>
        </View>
      );
    }
  };
  