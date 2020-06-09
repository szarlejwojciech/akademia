import { useRef, useEffect, useState } from 'react'
import { debounce } from 'lodash'

function useScroll() {
  const prevScrollY = useRef(0)

  const [goingUp, setGoingUp] = useState(true)

  useEffect(() => {
    window.myDebounce = debounce(handleScroll, 100)
    window.addEventListener('scroll', window.myDebounce, { passive: true })

    return () => {
      window.removeEventListener('scroll', window.myDebounce)
      delete window.myDebounce
    }
  }, [goingUp])

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false)
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true)
    }
    prevScrollY.current = currentScrollY
  }

  return goingUp
}

export default useScroll
