import * as React from 'react';
import styled from 'styled-components/native';
import {H1, H2, H3, H4, Body1, Body2} from '../../../styled/typography';
import {useTheme} from '@react-navigation/native';

export default function HomeScreen() {
  const {colors} = useTheme();
  return (
    <Container colors={colors}>
      <H1 colors={colors}>Heading 1</H1>
      <H2 colors={colors}>Heading 2</H2>
      <H3 colors={colors}>Heading 3</H3>
      <H4 colors={colors}>Heading 4</H4>
      <Body1 colors={colors}>Body 1</Body1>
      <Body2 colors={colors}>Body 2</Body2>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.colors.background};
`;
