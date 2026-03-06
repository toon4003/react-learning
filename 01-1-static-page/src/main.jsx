// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <> {/* this line make code work in multiline */}
    <h1>Hello React</h1>
    <p>This is a paragraph for un-order list</p>
  
    <ul>
      <li>Fish</li>
      <li>Crustaceans</li>
      <li>Wolf</li>
      <li>Horse</li>
    </ul>

    <h2>The things You need to do after wake up</h2>
    <ol>
      <li>wake up</li>
      <li>Brush your teeth</li>
      <li>Take a shower</li>
      <li>Go to bed?</li>
    </ol>
  </>
)
