import React from 'react'
const PrevUrlButton = () => {
  return (
    <button type="button" onClick={() => window.history.back()}>
      wróć
    </button>
  )
}

export default PrevUrlButton
