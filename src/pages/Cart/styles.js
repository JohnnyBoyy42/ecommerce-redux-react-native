import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const CartWrapper = styled.View`
  margin-bottom: 20px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const LabelContainer = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #333;
`;

export const ProductControl = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductControlWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  background: #eee;
  align-items: center;
  padding: 5px 10px;
  border-radius: 4px;
`;

export const AddProduct = styled.TouchableOpacity``;

export const RemoveProduct = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput`
  height: 26px;
  width: 51px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin: 0 5px;
  background: #fff;
  padding: 0 15px;
`;

export const ProductTotalContainer = styled.View``;

export const ProductTotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const TotalText = styled.View`
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const TotalLabel = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: #999;
`;

export const TotalAmount = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const ButtonContainer = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background: #7159c1;
  padding: 10px 0;
  border-radius: 4px;
  margin-top: 40px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
