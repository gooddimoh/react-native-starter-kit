import * as React from 'react';
import styled from 'styled-components/native';
import {DarkTheme} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FocusAwareStatusBar, Header} from '../../../components';
import {H3} from '../../../atoms';

export default function Demo({navigation}) {
  const insets = useSafeAreaInsets();
  return (
    <Container insets={insets}>
      <FocusAwareStatusBar />
      <Header />
      <H3 colors={DarkTheme.colors}>This is top text.</H3>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <H3 colors={DarkTheme.colors}>This is bottom text.</H3>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  padding-bottom: ${(props) => props.insets.bottom}px;
  background-color: #ffffff;
`;

const Button = styled.Button``;
