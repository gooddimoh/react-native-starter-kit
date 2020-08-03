import * as React from 'react';
import styled from 'styled-components/native';
import {H1, H2, H3, H4, Body1, Body2} from '../../../styled/typography';
import {useTheme} from '@react-navigation/native';

export default function HomeScreen({navigation}) {
  const {colors} = useTheme();
  React.useEffect(
    () => {
      let timer1 = setTimeout(() => {
        throw new Error('Error');
      }, 1000);

      // this will clear Timeout when component unmount like in willComponentUnmount
      return () => {
        clearTimeout(timer1);
      };
    },
    [], //useEffect will run only one time
    //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
  );
  return (
    <Container colors={colors}>
      <H1 colors={colors}>Heading 1</H1>
      <H2 colors={colors}>Heading 2</H2>
      <H3 colors={colors}>Heading 3</H3>
      <H4 colors={colors}>Heading 4</H4>
      <Body1 colors={colors}>Body 1</Body1>
      <Body2 colors={colors}>Body 2</Body2>
      <Button
        onPress={() => navigation.navigate('Settings')}
        title="Go to Settings"
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.colors.background};
`;

const Button = styled.Button``;
