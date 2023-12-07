import React, { section, useState } from 'react'

import './App.css'

const App = () => {


    return(
        <section>
            <div>
                <h1>About me</h1>
                <h2>Hi, my name is Chanasorn Howattanakulphong</h2>
                <h2>I'm a Software Engineeering student at KMITL</h2>
                <h3>I'm currently interested in developing my web development skills. </h3>
            </div>
            <h1 className=' md:py-20
                            py-10'>

                Web developing experience</h1>
            <div className='md:grid-cols-3
                            grid grid-cols-1 gap-y-8 min-h-fit'>

                <div className='col-span-3 font-bold'>
                    <h2>Frontend</h2>
                </div>

                <div className="logo p-2 font-mono grid place-items-center">
                    <img src='https://cdnlogo.com/logos/h/84/html.svg' alt='HTMLLogo.svg' className='max-h-max_icon min-h-min_icon'></img>
                    <h2>HTML</h2>
                </div>

                <div className="logo p-2 font-mono grid place-items-center">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' alt='JSLogo.png' className='max-h-max_icon min-h-min_icon'></img>
                    <h2>JS</h2>
                </div>
                
                <div className="logo p-2 font-mono grid place-items-center">
                    <img src='https://www.seekpng.com/png/full/141-1415372_css3-icon-png.png' alt='cssLogo.svg' className='max-h-max_icon min-h-min_icon'></img>
                    <h2>CSS</h2>
                </div>
                
                <div className="logo p-2 font-mono grid place-items-center">
                    <img src='https://www.logo.wine/a/logo/Lua_(programming_language)/Lua_(programming_language)-Logo.wine.svg' alt='LuaLogo.svg' className='max-h-max_icon min-h-min_icon'></img>
                    <h2>Lua</h2>
                </div>
                
                <div className="logo p-2 font-mono grid place-items-center">
                    <img src='https://www.logo.wine/a/logo/Lua_(programming_language)/Lua_(programming_language)-Logo.wine.svg' alt='LuaLogo.svg' className='max-h-max_icon min-h-min_icon'></img>
                    <h2>Lua</h2>
                </div>
                
                <div className="logo p-2 font-mono grid place-items-center">
                    <img src='https://www.logo.wine/a/logo/Lua_(programming_language)/Lua_(programming_language)-Logo.wine.svg' alt='LuaLogo.svg' className='max-h-max_icon min-h-min_icon'></img>
                    <h2>Lua</h2>
                </div>

                <div className='col-span-3'>
                    <h2>API</h2>
                </div>

                <div className='col-span-3'>
                    <h2>Backend</h2>
                </div>

                <div className='col-span-3'>
                    <h2>Database</h2>
                </div>

            </div>
            <h1 className=' md:py-20
                            py-10'>

                Other coding experiences</h1>
            <div className='md:grid-cols-3'>
                
            </div>
        </section>
    )
}

export default App


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <section>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </section>
//   )
//}

