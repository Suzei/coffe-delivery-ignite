import { createContext, ReactNode, useContext, useReducer } from "react";

interface ICoffe {
  coffePreparation: string[];
  name: string;
  description: string;
  price: number;
}

interface ICoffeProps {
  coffes: ICoffe;
  cart: ICoffe[];
}

interface CoffeContextChildrenProps {
  children: ReactNode;
}

const CoffeList = createContext({} as ICoffeProps);

export function CoffeContext({ children }: CoffeContextChildrenProps) {
  return (
    <CoffeList.Provider value={{ cart, coffe }}>{children}</CoffeList.Provider>
  );
}
