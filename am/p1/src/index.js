import React from "react"
import ReactDOM from 'react-dom/client'

// First components
const Greeting = () => {
   return <h2>Hello React Components!</h2>
}
export default Greeting;

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting></Greeting>)