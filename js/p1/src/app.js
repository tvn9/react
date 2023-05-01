// First react app component
import React, { useState } from "react"
import Field from "./components/translate"
import Languages from "./components/Languages"

export default function App() {
   const [Languages, setLanguages] = useState('es')
   const [text, setText] = useState('')

   return (
      <dev>
         <h3>Hi there!</h3>
      </dev>
   )
}