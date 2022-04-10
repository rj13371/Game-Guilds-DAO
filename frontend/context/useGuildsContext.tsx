import Moralis from "moralis/types";
import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useApiContract, useMoralis } from "react-moralis";
import { NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS } from "../constants";

interface IGuildsContext {
  guildData: any | undefined;
}

export const GuildsContext = createContext<IGuildsContext>({
  guildData: undefined,
});

export const GuildsProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [guildData, setGuildData] = useState<any>();

  const { runContractFunction, data, error, isLoading, isFetching } =
    useApiContract({
      abi: NFT_CONTRACT_ABI,
      address: NFT_CONTRACT_ADDRESS,
      functionName: "returnGuilds",
    });

  useEffect(() => {
    runContractFunction();
    setGuildData(data);
    console.log(data);
  }, []);

  return (
    <GuildsContext.Provider value={{ guildData }}>
      {children}
    </GuildsContext.Provider>
  );
};

export function useGuilds(): IGuildsContext {
  return useContext(GuildsContext);
}
