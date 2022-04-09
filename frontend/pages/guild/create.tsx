import { NextPage } from 'next'
import { useMoralis } from 'react-moralis'
import { Input } from 'web3uikit'
import useWindowWidth from '../../helpers/hooks/useWindowWidth'
import { createProposal } from '../../utils/snapshot/snapshot'

const CreateGuild: NextPage = () => {
  const { user } = useMoralis()
  const windowWidth = useWindowWidth(window)

  return (
    <div className="main">
      <button onClick={() => createProposal()}>click</button>
      <h2>Create Guild</h2>
      <form>
        <Input
          label="Guild name"
          name="Guild name"
          autoFocus
          id="name"
          placeholder="Guild name"
          type="text"
          width={windowWidth < 600 ? '80%' : '500px'}
        />
        <Input
          label="Max members"
          name="Max members"
          id="members"
          placeholder="Max members"
          type="number"
          width={windowWidth < 600 ? '80%' : '500px'}
        />
      </form>
    </div>
  )
}

export default CreateGuild
