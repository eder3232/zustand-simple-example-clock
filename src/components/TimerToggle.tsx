import React from 'react'
import { useApplicationState } from '../store'

const TimerToggle: React.FunctionComponent = () => {
  const { running, onToggle } = useApplicationState()
  return (
    <div className="my-5">
      <button
        onClick={onToggle}
        className="bg-blue-700 text-white px-10 py-2 font-bold rounded-full text-3xl"
      >
        {running ? 'Stop' : 'Start'}
      </button>
    </div>
  )
}

export default TimerToggle
