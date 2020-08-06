import React from 'react';
import styled from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {Avatar} from '../avatar';
import {Row, Icon} from '../../atoms';

export default function Header() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <StyledRow insets={insets}>
      <Icon
        type="AntDesign"
        name="menu-fold"
        color="#000"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Avatar
        source={{
          uri:
            'https://media.thethao247.vn/upload/cuongnm/2020/04/28/guc-nga-truoc-nhan-sac-cua-hot-girl-bong-ro-xinh-dep-nhat-trung-quoc1588047165.jpg',
        }}
        size={48}
      />
    </StyledRow>
  );
}

const StyledRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => props.insets.top}px;
  padding-horizontal: 20px;
`;
