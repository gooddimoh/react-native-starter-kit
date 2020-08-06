import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity as RNTouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';
import {conditionStyle} from '@utils/style';

const Button = ({
  children,
  color,
  style,
  outline,
  block,
  onPress,
  disabled,
  transparent,
  textColor,
}) => {
  const {colors} = useTheme();
  const buttonColor = !color ? colors.primary : color;
  const additionalStyle = {
    ...style,
    ...conditionStyle(outline, {borderColor: buttonColor, borderWidth: 1}),
    ...conditionStyle(!outline, {
      backgroundColor: disabled ? colors.grey : buttonColor,
    }),
    ...conditionStyle(transparent, {
      borderWidth: 0,
      backgroundColor: 'transparent',
      borderRadius: 0,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    }),
  };
  const childColor = outline ? buttonColor : colors.white;
  const childrenWithColor = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      ...child.props,
      color: textColor || childColor,
    }),
  );
  return (
    <TouchableOpacity block={block} style={additionalStyle} onPress={onPress}>
      {childrenWithColor}
    </TouchableOpacity>
  );
};

const TouchableOpacity = styled.TouchableOpacity`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
  elevation: 3;
  border-radius: 10px;
  padding: 10px;
  width: ${(props) => (props.block ? '100%' : 'auto')};
`;

Button.defaultProps = {
  outline: false,
  block: false,
  style: {},
  onPress: () => {},
  disabled: false,
  transparent: false,
};

Button.propTypes = {
  ...RNTouchableOpacity.propTypes,
  outline: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  transparent: PropTypes.bool,
  textColor: PropTypes.string,
};

export default Button;
