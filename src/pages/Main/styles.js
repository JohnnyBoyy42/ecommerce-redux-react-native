import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #191920;
`;

export const AddToCartButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  align-self: stretch;
  background: #7159c1;
  border-radius: 4px;
  height: 42px;
`;
export const AddToCartText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
`;
