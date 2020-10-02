import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Marker from './test.svg';

export default class App extends React.Component {
  render() {
    var dimensions = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    };
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Marker width={dimensions.height} height={dimensions.width} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
