import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';

import {
  Wrapper,
  Container,
  List,
  CartWrapper,
  ProductInfo,
  ProductImage,
  ProductTitle,
  ProductPrice,
  LabelContainer,
  ProductControl,
  AddProduct,
  RemoveProduct,
  ProductAmount,
  ProductControlWrapper,
  ProductTotalContainer,
  ProductTotal,
  TotalText,
  TotalLabel,
  TotalAmount,
  ButtonContainer,
  ButtonText,
} from './styles';

export default function Cart() {
  const products = [
    {
      id: 1,
      title: 'Tênis de Caminhada Leve Confortável',
      price: 179.9,
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
    },
    {
      id: 2,
      title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
      price: 139.9,
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
    },
  ];
  return (
    <Wrapper>
      <Container>
        <List
          data={products}
          keyExtractor={product => product.id}
          renderItem={({ item }) => (
            <CartWrapper>
              <ProductInfo>
                <ProductImage source={{ uri: item.image }} />
                <LabelContainer>
                  <ProductTitle>{item.title}</ProductTitle>
                  <ProductPrice>{item.price}</ProductPrice>
                </LabelContainer>
              </ProductInfo>
              <ProductControlWrapper>
                <ProductControl>
                  <AddProduct>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </AddProduct>
                  <ProductAmount value="3" />
                  <RemoveProduct>
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </RemoveProduct>
                </ProductControl>
                <ProductTotalContainer>
                  <ProductTotal>{formatPrice(item.price)}</ProductTotal>
                </ProductTotalContainer>
              </ProductControlWrapper>
            </CartWrapper>
          )}
        />
        <TotalText>
          <TotalLabel>TOTAL</TotalLabel>
          <TotalAmount>{formatPrice(1888888.88)}</TotalAmount>
        </TotalText>
        <ButtonContainer>
          <ButtonText>FINALIZAR PEDIDO</ButtonText>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
}
