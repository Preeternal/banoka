import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from 'native-base';
import { strings } from '../../../locales/i18n';

const InputPicker = ({
  label, selectedValue, onValueChange, options,
}) => {
  const {
    containerStyle, labelStyle, labelTextStyle, inputStyle, pickerStyle,
  } = styles;

  return (
    <View style={containerStyle}>
      <View style={labelStyle}>
        <Text style={labelTextStyle}>{label}</Text>
      </View>
      <View style={inputStyle}>
        <View style={{ paddingLeft: 10 }} />
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          // itemStyle={{ color: '#525050' }}
          itemTextStyle={{ color: '#525050' }}
          iosHeader={strings('picker.iosHeader')}
          headerBackButtonText={strings('picker.headerBackButtonText')}
          // headerStyle={{ color: '#525050' }}
          textStyle={{ color: '#525050' }}
          // mode='dropdown'
          options={options}
          style={pickerStyle}
          // headerStyle={{ backgroundColor: '#b95dd3' }}
        >
          {options.map((item, index) => (
            <Picker.Item label={item} value={index} key={item} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    minHeight: 52,
    flexDirection: 'row',
  },
  labelStyle: {
    flex: 1.9,
    borderRightWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
  },
  labelTextStyle: {
    paddingLeft: 10,
    paddingRight: 5,
  },
  inputStyle: {
    flex: 1.1,
    flexDirection: 'row',
  },
  pickerStyle: {
    flex: 1,
  },
};

export { InputPicker };
