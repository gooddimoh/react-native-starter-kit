import * as React from 'react';
import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';
import {Header} from '../../../components';
import {Sample_1, Sample_2} from '../../../../assets/svg';
import {
  DividerVertical,
  DividerHorizontal,
  Container,
  Column,
  Row,
  Body1,
  H2,
  H3,
} from '../../../atoms';

export default function HomeScreen({navigation}) {
  const {colors} = useTheme();
  return (
    <StyledContainer>
      <Header />
      <DividerVertical spacing={20} />
      <Box>
        <Description colors={colors}>Light Style</Description>
        <Name colors={colors}>Dales Personal</Name>
        <DividerVertical spacing={20} />
        <StyledRow>
          <Sample_1 />
          <DividerHorizontal spacing={20} />
          <Sample_2 />
        </StyledRow>
        <DividerVertical spacing={20} />
      </Box>
      <Panel>
        <StyledRow align="center">
          <Square color="#FFCEAC" />
          <DividerHorizontal spacing={20} />
          <Body1>My total trips</Body1>
        </StyledRow>
        <DividerVertical spacing={20} />
        <StyledRow align="center">
          <Square color="#FFB6B6" />
          <DividerHorizontal spacing={20} />
          <Body1>Payment setting</Body1>
        </StyledRow>
        <DividerVertical spacing={20} />
        <StyledRow align="center">
          <Square color="#679B9B" />
          <DividerHorizontal spacing={20} />
          <Body1>Total distance</Body1>
        </StyledRow>
      </Panel>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  background-color: #ffffff;
`;

const Box = styled(Column)`
  padding-horizontal: 20px;
`;

const Name = styled(H2)`
  color: #000000;
`;

const Description = styled(H3)`
  color: grey;
`;

const StyledRow = styled(Row)`
  width: 100%;
  align-items: ${(props) => props.align || 'flex-start'};
`;

const Panel = styled(Column)`
  background-color: rgba(60, 73, 164, 0.04);
  border-radius: 20px;
  padding: 30px 15px 30px 15px;
  margin-horizontal: 5px;
`;

const Square = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background-color: ${(props) => props.color};
`;
