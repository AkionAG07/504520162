import React from "react";

type Product = {
  id: number;
  name: string;
  step: number;
  price: number;
};

type MyContextData = {
  products: Product[];
};

const MyContext = React.createContext<MyContextData>({
  products: [],
});

export default MyContext;
