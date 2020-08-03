import * as React from 'react';
import styled from 'styled-components/native';
import {useSetRecoilState} from 'recoil';

import {SVGLogin} from '../../../../assets/svg';
import {H2, Body1} from '../../../styled/typography';
import {useTheme} from '@react-navigation/native';
import {userTokenSelector} from '../recoil';

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
        backgroundColor={colors.primary}
        disabled={!username || !password}
        onPress={() => setToken(username + password)}>
        <Body1 color={'#fff'}>Login</Body1>
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

const Input = styled.TextInput`
  height: 40px;
  border-color: gray;
  border-width: 1px;
  width: 100%;
  margin-vertical: 10px;
  border-radius: 8px;
  padding-left: 10px;
`;

const Button = styled.TouchableOpacity`
  height: 40px;
  width: 100%;
  background-color: ${(props) =>
    props.disabled ? 'gray' : props.backgroundColor};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
