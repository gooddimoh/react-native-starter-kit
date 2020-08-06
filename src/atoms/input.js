import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {Keyboard} from 'react-native';
import {useTheme} from '@react-navigation/native';

const Input = ({
  errorMessage,
  color,
  noStyle,
  rounded,
  underline,
  defaultStyle,
  style,
  activeStyle,
  errorStyle,
  errorColor,
  iconLeft,
  iconRight,
  onChangeText,
  isValid,
  ...otherProps
}) => {
  const {colors} = useTheme();
  const [focused, setFocus] = useState(false);
  const [error, setError] = useState(false);
  const [text, setText] = useState('');
  const handleTextChange = (text) => {
    setText(text);
    if (onChangeText) {
      onChangeText(text);
    }

    if (isValid) {
      setError(!isValid(text));
    }
  };

  return (
    <Container>
      <Wrap>
        <StyledInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onSubmitEditing={() => {
            setFocus(true);
            Keyboard.dismiss();
          }}
          placeholderTextColor={error ? errorColor : colors.grey}
          {...otherProps}
          onChangeText={handleTextChange}
        />
      </Wrap>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  margin-bottom: 5px;
`;

const Wrap = styled.View`
  margin-top: 10px;
  margin-bottom: 5px;
  width: 100%;
  height: 45px;
  flex-direction: row;
`;

const StyledInput = styled.TextInput`
  width: 100%;
`;

export default Input;
