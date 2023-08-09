export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export const product: Product[] = [
  { id: 1, name: "Product A", price: 10.99, quantity: 5 },
  { id: 2, name: "Product B", price: 20.49, quantity: 3 },
  { id: 3, name: "Product C", price: 5.75, quantity: 10 },
  { id: 4, name: "Product D", price: 15.0, quantity: 8 },
];
