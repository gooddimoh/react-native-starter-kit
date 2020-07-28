import * as React from 'react';
import {AuthContext} from '../../../contexts';
import styled from 'styled-components/native';
import {SVGLogin} from '../../../../assets/svg';

export default function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = React.useContext(AuthContext);

  return (
    <Container>
      <SVGLogin />
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
      <Button title="Sign in" onPress={() => signIn({username, password})} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
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

const Button = styled.Button``;
