import * as React from 'react';
import styled from 'styled-components/native';
import {H3} from '../../../styled/typography';
import {useTheme} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FocusAwareStatusBar} from '../../../components';
import {AuthContext} from '../../../contexts';

export default function Settings({navigation}) {
  const {colors} = useTheme();
  const insets = useSafeAreaInsets();

  const {signOut} = React.useContext(AuthContext);

  return (
    <Container insets={insets}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#eeffcc" />
      <H3 colors={colors}>This is top text.</H3>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Button onPress={() => signOut()} title="Log out" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => props.insets.top}px;
  padding-bottom: ${(props) => props.insets.bottom}px;
  background-color: #eeffcc;
`;

const Button = styled.Button``;
