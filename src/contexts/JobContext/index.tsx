import { createContext, useState } from "react";

interface IJobCountextProps {
  children: React.ReactNode;
}

interface IJobContextProps {
  // tipagem das props de value do JobContext.Provider
  test: string | null;
}

export const JobContext = createContext<IJobContextProps>(
  {} as IJobContextProps
);

export const JobProvider = ({ children }: IJobCountextProps) => {
  const [test, setTest] = useState(null);

  return <JobContext.Provider value={{ test }}>{children}</JobContext.Provider>;
};
