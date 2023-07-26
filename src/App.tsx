// import PrinterHSK from './PrinterHSK'
// import PrinterIDM from './PrinterIDM'

// function App() {
//   return (
//     <>
//       {/* <div className='text'>Hello World</div> */}
//       <div className='text'><Printer /></div>
//     </>
//   )
// }

// export default App

import { HashRouter as Router } from 'react-router-dom'

import { useState } from "react";
import PrinterHSK from "./PrinterHSK";
import PrinterIDM from "./PrinterIDM";

function App() {
  const [isSwitched, setIsSwitched] =
    useState<boolean>(true);

  const toggleIO = () => {
    setIsSwitched( (prevChoice: boolean) => !prevChoice );
  };

  return (
    <Router>
      {/* <> */}

        <div className="main-body-upper">
          <button className="toggle-button" onClick={ toggleIO }>
            { isSwitched ? "成語" : "漢語" }
          </button>
        </div>
        <div className="main-body-lower">
          <div className="text">
            {/* <button className='toggle-button' onClick={toggleIO}>
              Toggle
            </button> */}
          </div>
          <div className="text">
            {isSwitched ? <PrinterHSK /> : <PrinterIDM />}
          </div>
        </div>
      {/* </> */}
    </Router>
  );
}

export default App;
