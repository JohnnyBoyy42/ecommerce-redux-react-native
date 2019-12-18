import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

function Cart({ products, total, removeFromCart }) {
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
                      onPress={() => removeFromCart(item.id)}
                    >
                      <Icon name="clear" size={24} color="#7159c1" />
                    </RemoveProductContainer>
                  </ProductInfoContainer>
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
                    <ProductAmount value={String(item.amount)} />
                    <RemoveProduct>
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

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
    priceFormatted: formatPrice(product.price),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
