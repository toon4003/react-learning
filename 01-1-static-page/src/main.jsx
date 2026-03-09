import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// const header = createElement('h1', {className: 'header'}, 'Hello from createElement')
// const header2 = <h1>Hello from JSX</h1>
// console.log(header2)

const root = createRoot(document.getElementById("root"))

function MyAwesomeNavbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">MyAwesomeNavbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample03">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form role="search">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </div>
        </nav>
    )
}

/**
 * Challenge:
 * Create your very first custom React component!
 * Call it "MainContent", and have it return a simple
 * h1 element that says "React is great!"
 * 
 * Afterward, render it on the line below MyAwesomeNavbar
 */
function MainContent(){
  return(
    <h1>React is great!</h1>
  )
}
// createRoot(document.getElementById('root')).render(
//   <> {/* this line make code work in multiline */}
//     {/* <h1>Hello React</h1> */}
//     {header}
//     {header2}
//     <p>This is a paragraph for un-order list</p>
  
//     <ul>
//       <li>Birds</li>
//       <li>Crustaceans</li>
//       <li>Amphibians</li>
//       <li>Fish</li>
//     </ul>

//     note: visit here <a href="https://www.earthreminder.com/classification-of-animals/">Classification of Animals</a> for more details

//     <h2>The things You need to do after wake up</h2>
//     <ol>
//       <li>wake up</li>
//       <li>Brush your teeth</li>
//       <li>Take a shower</li>
//       <li>Go to bed?</li>
//     </ol>
//   </>
// )
root.render(
  <>
    <MyAwesomeNavbar />
    <MainContent />
  </>
)