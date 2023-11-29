//purpose: if an element is seen on screen
import { useEffect, useState, RefObject } from "react"

function useOnScreen(ref: RefObject<Element>) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // update the state with new values:
        setIntersecting(entry.isIntersecting ?? false)
      },
      {
        //90% should the visible for the callback function
        threshold: 0.5,
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [ref])

  return isIntersecting
}

export default useOnScreen
