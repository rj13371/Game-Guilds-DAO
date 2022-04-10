import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import { useApiContract, useMoralis } from 'react-moralis'
import { NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS } from '../constants'
import Moralis from 'moralis'

interface IGuildsContext {
  data: any | undefined
}

export const GuildsContext = createContext<IGuildsContext>({
  data: undefined,
})

export const GuildsProvider = ({
  children,
}: {
  children: ReactNode
}): JSX.Element => {
  const [guildData, setGuildData] = useState<any>()
  const { isAuthenticated } = useMoralis()

  const getGuilds = async () => {
    await Moralis.enableWeb3()

    const sendOptions = {
      abi: NFT_CONTRACT_ABI,
      contractAddress: NFT_CONTRACT_ADDRESS,
      functionName: 'returnGuilds',
    }

    const transaction = await Moralis.executeFunction(sendOptions)

    const receipt = transaction
    console.log(receipt)
  }

  useEffect(() => {
    getGuilds()
  }, [isAuthenticated])

  console.log(guildData)

  return (
    <GuildsContext.Provider value={{ guildData }}>
      {children}
    </GuildsContext.Provider>
  )
}

export function useGuilds(): IGuildsContext {
  return useContext(GuildsContext)
}
