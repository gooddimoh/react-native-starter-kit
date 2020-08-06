import * as React from 'react';
import styled from 'styled-components/native';
import {useSetRecoilState} from 'recoil';

import {SVGLogin} from '../../../../assets/svg';
import {useTheme} from '@react-navigation/native';
import {userTokenSelector} from '../recoil';
import {Button, Input, H2, Body1} from '../../../atoms';

export default function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const setToken = useSetRecoilState(userTokenSelector);
  const {colors} = useTheme();

  return (
    <Container>
      <SVGLogin />
      <H2 color={colors.primary}>Welcome</H2>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        transparent
        textColor={colors.primary}
        backgroundColor={colors.primary}
        disabled={!username || !password}
        onPress={() => setToken(username + password)}>
        <Body1>Login</Body1>
      </Button>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
  background-color: #ffffff;
`;
