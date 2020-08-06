import styled from 'styled-components/native';

export const H1 = styled.Text`
  font-family: SFProDisplay-Light;
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 64px;
  letter-spacing: 0.2px;
  color: ${(props) => props.color || 'black'};
`;

export const H2 = styled.Text`
  font-family: SFProDisplay-Light;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.2px;
  color: ${(props) => props.color || 'black'};
`;

export const H3 = styled.Text`
  font-family: SFProDisplay-Regular;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: ${(props) => props.color || 'black'};
`;

export const H4 = styled.Text`
  font-family: SFProDisplay-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: ${(props) => props.color || 'black'};
`;

export const Body1 = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: ${(props) => props.color || 'black'};
`;

export const Body2 = styled.Text`
  font-family: SFProDisplay-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: ${(props) => props.color || 'black'};
`;
