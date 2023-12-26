import Cart from "../components/Cart";
import { screen, render } from "@testing-library/react";

describe('Cart', () => {
  test('cart should display a title', () => {
    render(<Cart />);
    const title = screen.getByText('My cart');
    expect(title).toBeInTheDocument();
  })

  test('cart should display "No product selected" badge when cart is empty', () => {
    render(<Cart />);
    const noProductBadge = screen.getByText('No product selected');
    expect(noProductBadge).toBeInTheDocument();
  });

  test('cart should display cart items when cart is not empty', () => {
    const cartItems = [
      { id: 1, title: 'Product 1', quantity: 2, price: 10, category: 'Category 1' },
      { id: 2, title: 'Product 2', quantity: 1, price: 15, category: 'Category 2' }
    ];
    render(<Cart />);
    cartItems.forEach(item => {
      const itemTitle = screen.getByText(item.title);
      const itemQuantity = screen.getByText(item.quantity.toString());
      const itemPrice = screen.getByText(`$${item.price * item.quantity}`);
      const itemCategory = screen.getByText(item.category);
      expect(itemTitle).toBeInTheDocument();
      expect(itemQuantity).toBeInTheDocument();
      expect(itemPrice).toBeInTheDocument();
      expect(itemCategory).toBeInTheDocument();
    });
  });
})
