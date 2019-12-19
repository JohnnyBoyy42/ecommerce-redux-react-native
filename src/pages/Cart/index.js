import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

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
  EmptyContainer,
  EmptyText,
  ProductInfoContainer,
  RemoveProductContainer,
} from './styles';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce(
        (sumTotal, product) => sumTotal + product.price * product.amount,
        0
      )
    )
  );

  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
      priceFormatted: formatPrice(product.price),
    }))
  );

  const dispatch = useDispatch();

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  return (
    <Wrapper>
      {products.length ? (
        <Container>
          <List
            data={products}
            keyExtractor={product => product.id}
            renderItem={({ item }) => (
              <CartWrapper>
                <ProductInfo>
                  <ProductInfoContainer>
                    <ProductImage source={{ uri: item.image }} />
                    <LabelContainer>
                      <ProductTitle>{item.title}</ProductTitle>
                      <ProductPrice>{item.priceFormatted}</ProductPrice>
                    </LabelContainer>
                    <RemoveProductContainer
                      onPress={() =>
                        dispatch(CartActions.removeFromCart(item.id))
                      }
                    >
                      <Icon name="clear" size={24} color="#7159c1" />
                    </RemoveProductContainer>
                  </ProductInfoContainer>
                </ProductInfo>
                <ProductControlWrapper>
                  <ProductControl>
                    <AddProduct onPress={() => decrement(item)}>
                      <Icon
                        name="remove-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </AddProduct>
                    <ProductAmount value={String(item.amount)} />
                    <RemoveProduct onPress={() => increment(item)}>
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </RemoveProduct>
                  </ProductControl>
                  <ProductTotalContainer>
                    <ProductTotal>{item.subTotal}</ProductTotal>
                  </ProductTotalContainer>
                </ProductControlWrapper>
              </CartWrapper>
            )}
          />
          <TotalText>
            <TotalLabel>TOTAL</TotalLabel>
            <TotalAmount>{total}</TotalAmount>
          </TotalText>
          <ButtonContainer>
            <ButtonText>FINALIZAR PEDIDO</ButtonText>
          </ButtonContainer>
        </Container>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )}
    </Wrapper>
  );
}
