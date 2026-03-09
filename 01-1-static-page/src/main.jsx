import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const header = createElement('h1', {className: 'header'}, 'Hello from createElement')
const header2 = <h1>Hello from JSX</h1>
console.log(header2)
createRoot(document.getElementById('root')).render(
  <> {/* this line make code work in multiline */}
    {/* <h1>Hello React</h1> */}
    {header}
    {header2}
    <p>This is a paragraph for un-order list</p>
  
    <ul>
      <li>Birds</li>
      <li>Crustaceans</li>
      <li>Amphibians</li>
      <li>Fish</li>
    </ul>

    note: visit here <a href="https://www.earthreminder.com/classification-of-animals/">Classification of Animals</a> for more details

    <h2>The things You need to do after wake up</h2>
    <ol>
      <li>wake up</li>
      <li>Brush your teeth</li>
      <li>Take a shower</li>
      <li>Go to bed?</li>
    </ol>
  </>
)
