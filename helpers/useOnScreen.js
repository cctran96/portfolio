import {useState, useEffect} from "react"

export default function useOnScreen(ref) {
    const [visibility, setVisibility] = useState(false)
    const observer = new IntersectionObserver(
      ([entry]) => setVisibility(entry.isIntersecting)
    )
    
    useEffect(() => {
      observer.observe(ref.current)
      return () => { observer.disconnect() }
    }, [])

    return visibility
}