import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useMoralis } from "react-moralis";
import { NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS } from "../constants";
import Moralis from "moralis";

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
  const { isInitialized } = useMoralis();

  console.log(Moralis.isWeb3Enabled());
  const getGuilds = async () => {
    const sendOptions = {
      abi: NFT_CONTRACT_ABI,
      contractAddress: NFT_CONTRACT_ADDRESS,
      functionName: "returnGuilds",
    };

    const transaction = await Moralis.executeFunction(sendOptions);

    const receipt = transaction;
    console.log(receipt);
  };

  useEffect(() => {
    getGuilds();
  }, [Moralis.isWeb3Enabled]);

  console.log(guildData);

  return (
    <GuildsContext.Provider value={{ guildData }}>
      {children}
    </GuildsContext.Provider>
  );
};

export function useGuilds(): IGuildsContext {
  return useContext(GuildsContext);
}
