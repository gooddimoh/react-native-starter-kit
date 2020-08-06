import styled from 'styled-components/native';

export const DividerHorizontal = styled.View`
  width: ${(props) => props.spacing ?? 4}px;
`;

export const DividerVertical = styled.View`
  height: ${(props) => props.spacing ?? 4}px;
`;
