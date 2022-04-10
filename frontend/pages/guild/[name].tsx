import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMoralis } from 'react-moralis'
import { useMoralisWeb3Api } from 'react-moralis'
import { useState } from 'react'
import { Button, Icon, Input, TextArea, Form } from 'web3uikit'
import { createProposal } from '../../utils/snapshot/snapshot'
import styles from '../../styles/Guild.module.css'

const Guild: NextPage = () => {
  const router = useRouter()
  const { name } = router.query
  const { user } = useMoralis()
  const Web3Api = useMoralisWeb3Api()

  const fetchDateToBlock = async () => {
    const timestamp = Math.round(new Date().getTime() / 1000)
    const options = { chain: 'rinkeby', date: timestamp }
    const date = await Web3Api.native.getDateToBlock(options)
    return date
  }

  const handleSubmit = async (e) => {
    if (!user) {
      // TODO: Implement error notifications
      console.error('You must have a connected wallet to continue.')
    } else {
      const date = await fetchDateToBlock()
      console.log(e.data, date)
      createProposal(e.data, date.block)
      return false
    }
  }

  return (
    <div className="main">
      <h1>{name}</h1>

      <Form
        id="poll"
        buttonConfig={{
          theme: 'primary',
          isLoading: false,
          loadingText: 'Loading',
          text: 'Create',
        }}
        data={[
          {
            inputWidth: '50%',
            name: 'Poll name',
            type: 'text',
            validation: {
              required: true,
            },
            value: '',
          },
          {
            inputWidth: '100%',
            name: 'Description',
            type: 'textarea',
            validation: {
              required: true,
            },
            value: '',
          },
          {
            inputWidth: '50%',
            name: 'End date',
            type: 'date',
            validation: {
              required: true,
            },
            value: '',
          },
          {
            inputWidth: '25%',
            name: 'Choice A',
            type: 'text',
            validation: {
              required: true,
            },
            value: '',
          },
          {
            inputWidth: '25%',
            name: 'Choice B',
            type: 'text',
            validation: {
              required: true,
            },
            value: '',
          },
          {
            inputWidth: '25%',
            name: 'Choice C',
            type: 'text',
            validation: {
              required: true,
            },
            value: '',
          },
          {
            inputWidth: '25%',
            name: 'Choice D',
            type: 'text',
            validation: {
              required: true,
            },
            value: '',
          },
        ]}
        onSubmit={(e) => handleSubmit(e)}
        title="Create Poll"
      />
    </div>
  )
}

export default Guild
