import { useContext, createContext, ReactNode } from "react";
import { useApiContract } from "react-moralis";
import { NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS } from "../constants";

interface IGuildsContext {
  data: any | undefined;
}

export const GuildsContext = createContext<IGuildsContext>({
  data: undefined,
});

export const GuildsProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  console.log(NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS);
  const { data, error } = useApiContract({
    abi: NFT_CONTRACT_ABI,
    address: NFT_CONTRACT_ADDRESS,
    functionName: "returnGuilds",
  });

  console.log(data, error);

  return (
    <GuildsContext.Provider value={{ data }}>{children}</GuildsContext.Provider>
  );
};

export function useGuilds(): IGuildsContext {
  return useContext(GuildsContext);
}
