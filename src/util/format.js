export const formatPrice = number => {
  const formattedNumber = parseFloat(number).toFixed(2);

  return `R$ ${formattedNumber.toString().replace('.', ',')}`;
};
