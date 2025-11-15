'use client'

import { useState } from 'react'

export default function Counter({ incrementBy = 1, buttonColor = '#3b82f6' }) {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(prev => {
      const next = prev + incrementBy
      // if we roll past 10, start over at 0
      return next > 10 ? 0 : next
    })
  }

  const containerStyle = {
    margin: '16px',
    padding: '16px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    maxWidth: '260px',
  }

  const buttonStyle = {
    backgroundColor: buttonColor,
    color: 'white',
    padding: '8px 18px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '15px',
  }

  return (
    <div style={containerStyle}>
      <h3>Counter (step: {incrementBy})</h3>
      <p>
        Current value: <strong>{count}</strong>
      </p>
      <button onClick={handleClick} style={buttonStyle}>
        +{incrementBy}
      </button>
      <p style={{ fontSize: '12px', marginTop: '8px', color: '#555' }}>
        Resets back to 0 once it goes over 10.
      </p>
    </div>
  )
}

