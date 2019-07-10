import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text } from 'react-native';
import { images } from '../../assets/theme/images';



// import PropTypes from 'prop-types';


export const Enhancer = ({
  imageName,
  rotate,
  onPress
}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image source={images[imageName]} style={rotate && styles.rotateImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    rotateImage: { transform: [{ rotate: '180deg' }] }
});

// Modal.propTypes = {
//   modal: PropTypes.shape({
//     title: PropTypes.string,
//     text: PropTypes.string,
//   }),
//   isGeneric: PropTypes.bool,
//   closeAction: PropTypes.func,
// };

// Modal.defaultProps = {
//   isGeneric: false,
//   modal: {
//     title: '',
//     text: '',
//   },
//   closeAction: () => true,
// };


