import styled from 'styled-components/native';
import logo from '../../assets/images/Logo.png';

export const Wrapper = styled.SafeAreaView`
  flex-direction: row;
  background: #141419;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 15px 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const Cart = styled.TouchableOpacity``;

export const ImageButton = styled.TouchableOpacity``;
