import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export default function Avatar({source, size, disabled, onPress, ...rest}) {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <Image source={source} size={size} {...rest} />
    </TouchableOpacity>
  );
}

const Image = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
`;

Avatar.propTypes = {
  source: PropTypes.object.isRequired,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

Avatar.defaultProps = {
  size: 24,
  disabled: false,
  onPress: () => {},
};
