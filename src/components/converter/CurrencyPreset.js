// @flow
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SwipeRow } from 'react-native-swipe-list-view';
import { LocalizationContext } from '../../Context';

type Props = {
  char: string,
  onDelete: Function,
  onMove: Function,
  onPressOut: Function,
  isActive: boolean,
  deleteListItem: Function,
};

const { width } = Dimensions.get('window');

const CurrencyPreset = (props: Props) => {
  const {
    listItem,
    absoluteCell,
    absoluteCellText,
    containerStyle,
    active,
    deleteStyle,
    charStyle,
    charTextStyle,
    moveStyle,
    iconStyle,
  } = styles;
  const { t } = React.useContext(LocalizationContext);
  return (
    <SwipeRow
      style={listItem}
      leftOpenValue={width}
      stopLeftSwipe={width}
      onRowOpen={props.deleteListItem}
      tension={20}
      disableLeftSwipe
    >
      <View style={absoluteCell}>
        <Text style={absoluteCellText}>{t('converter.DELETE')}</Text>
      </View>
      <View style={[containerStyle, props.isActive && active]}>
        <TouchableOpacity style={deleteStyle} onPress={props.onDelete}>
          <MaterialIcon name="delete" style={iconStyle} />
        </TouchableOpacity>
        <View style={charStyle}>
          <Text style={charTextStyle}>{props.char}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          style={moveStyle}
          onPressIn={props.onMove}
          onPressOut={props.onPressOut}
        >
          <FontAwesome name="sort" style={iconStyle} />
        </TouchableOpacity>
      </View>
    </SwipeRow>
  );
};

const styles = {
  listItem: {
    minHeight: 52,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  absoluteCell: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  absoluteCellText: { fontFamily: 'Ubuntu', marginRight: 15, color: '#FFF' },
  containerStyle: {
    width,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    minHeight: 52,
    flexDirection: 'row',
  },
  active: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  deleteStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 15,
  },
  charStyle: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  charTextStyle: {
    fontFamily: 'Ubuntu',
    fontSize: 13,
  },
  moveStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 15,
  },
  iconStyle: {
    fontSize: 22,
    color: 'gray',
  },
};

export default CurrencyPreset;
