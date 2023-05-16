import React from 'react'
import TimerDisplay from './components/TimerDisplay'
import TimerToggle from './components/TimerToggle'
import Names from './components/Names'

const App: React.FC = () => (
  <div className="mt-10 mx-auto maw-w-3xl">
    <h1 className="font-bold text-5xl mb-5 border-b-2 border-gray-800">
      Unidirectional - Zustand
    </h1>

    <TimerDisplay />
    <TimerToggle />
    <Names />
  </div>
)

export default App
