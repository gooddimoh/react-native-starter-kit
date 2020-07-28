import * as React from 'react';
import styled from 'styled-components/native';
import {H3} from '../../../styled/typography';
import {DarkTheme} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FocusAwareStatusBar} from '../../../components';

export default function Demo({navigation}) {
  const insets = useSafeAreaInsets();
  return (
    <Container insets={insets}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <H3 colors={DarkTheme.colors}>This is top text.</H3>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <H3 colors={DarkTheme.colors}>This is bottom text.</H3>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => props.insets.top}px;
  padding-bottom: ${(props) => props.insets.bottom}px;
  background-color: #6a51ae;
`;

const Button = styled.Button``;
