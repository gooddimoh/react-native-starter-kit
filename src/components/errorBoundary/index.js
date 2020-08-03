import * as React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {DefaultTheme} from '@react-navigation/native';

import {StyledView, Typography, StyledDivider} from '../../styled';
import {SVGError} from '../../../assets/svg';
import {DynIcon} from '../icons';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  onRefresh = () => {
    this.setState({hasError: false});
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Center>
          <SVGError />
          <StyledDivider.DividerVertical spacing={20} />
          <Title>Something went wrong</Title>
          <StyledDivider.DividerVertical spacing={20} />
          <TouchableOpacity onPress={this.onRefresh}>
            <Row>
              <DynIcon
                name="refresh"
                type="FontAwesome"
                size={30}
                color={DefaultTheme.colors.primary}
                disabled
              />
              <StyledDivider.DividerHorizontal spacing={8} />
              <Typography.Body1>Refresh</Typography.Body1>
            </Row>
          </TouchableOpacity>
        </Center>
      );
    }

    return this.props.children;
  }
}

const Center = styled(StyledView.Center)`
  flex: 1;
`;

const Title = styled(Typography.H3)`
  color: ${DefaultTheme.colors.primary};
`;

const Row = styled(StyledView.Row)`
  align-items: center;
`;
