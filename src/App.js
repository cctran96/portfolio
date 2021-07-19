import React, { useEffect, useState} from "react"
import Logo from "./icons/Logo"

const App = () => {
    const [isLoading, setLoading] = useState(true)
    const fakeRequest = () => new Promise(resolve => setTimeout(() => resolve(), 3500))

    useEffect(() => {
        fakeRequest().then(() => setLoading(!isLoading))
      }, [])

    return (
        isLoading ? <Logo /> :
        <div>

        </div>
    )
}

export default App