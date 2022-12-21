export function getCountProductsInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
}

export function getCountProductsInWish() {
  const wish = JSON.parse(localStorage.getItem("wish"));
  return wish ? wish.products.length : 0;
}
export const calcSubPrice = (product) => +product.count * product.item.price;

export const calcTotalPrice = (products) => {
  return products.reduce((acc, curr) => {
    return (acc += curr.subPrice);
  }, 0);
};
