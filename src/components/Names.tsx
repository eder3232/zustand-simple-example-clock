import React from 'react'
import { useApplicationState } from '../store'

const Names: React.FC = () => {
  const { names } = useApplicationState()
  return names ? (
    <>
      <div className="text-3xl font-bold mb-5">Data</div>
      <div className="text-3xl font-mono">{JSON.stringify(names)}</div>
    </>
  ) : null
}

export default Names
