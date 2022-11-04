import { createContext, useState } from "react";

interface IUserCountextProps {
  children: React.ReactNode;
}

interface IUserContextProps {
  // tipagem das props de value do UserContext.Provider
  test: string | null;
}

export const UserContext = createContext<IUserContextProps>(
  {} as IUserContextProps
);

export const UserProvider = ({ children }: IUserCountextProps) => {
  const [test, setTest] = useState(null);

  return (
    <UserContext.Provider value={{ test }}>{children}</UserContext.Provider>
  );
};
