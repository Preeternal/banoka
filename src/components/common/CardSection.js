import React from 'react';
import { View } from 'react-native';

const CardSection = ((props) =>
    (<View style={styles.containerStyle}>
      {props.children}
    </View>)
);

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    //backgroundColor: '#F5FCFF',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
