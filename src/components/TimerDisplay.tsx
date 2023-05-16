import React from 'react'

import { useApplicationState } from '../store'

const TimerDisplay: React.FC = () => {
  const { seconds } = useApplicationState()

  return (
    <div className="text-3xl">
      <span className="mr-5 font-bold">Stopwatch:</span>
      <span className="font-mono">{seconds.toFixed(1)}</span>
    </div>
  )
}

export default TimerDisplay
