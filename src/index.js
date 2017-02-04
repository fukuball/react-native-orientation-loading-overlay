import React, { Component } from 'react';
import {
    Modal,
    ActivityIndicator,
    View,
    Text,
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
    padding: 20
  },
  indicator: {
    marginBottom: 15
  },
  message: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '900'
  }
});

export default class OrientationLoadingOverlay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={this.props.visible}
        supportedOrientations={['portrait', 'landscape']}
        onOrientationChange={evt => this.setState({currentOrientation: evt.nativeEvent.orientation})}
        >
        <View style={[styles.container]}>
          <View style={[styles.innerContainer]}>
            <ActivityIndicator
              style={[styles.indicator]}
              size="large"
              color="#fff"
              />
            <Text style={[styles.message]}>
              {this.props.message}
            </Text>
          </View>
        </View>
      </Modal>
    );
  }
}