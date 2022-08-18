// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import { Router } from './Router'

function App() {

  return (
    <BrowserRouter basename='/' >
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  )
}

export default App
