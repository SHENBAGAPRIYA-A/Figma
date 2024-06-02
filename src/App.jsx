// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section className="body">
//       <img src="beauty.png" alt="image" width="375" height="124" /><br></br>
      
//     </section>
//     <section className="body">
//     <table className="tab">
//       <td className="des">Professional Online <br></br>Makeup Course</td>
//       <tr>
//       <td className="des1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzLgF0pUp3BrZ1zxfcf9rjjhHr2DgO0xZ0g&usqp=CAU" width="18" height="14"></img> Certification Programme</td> 
//       <td className="des3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEs3c-vaT2aVi9GkzOKqVPDB3ybYDjQvpMAA&usqp=CAU" width="11" height="10.56"></img>Rated 4.85/5</td>
//       </tr>
//       <tr>
//         <td className="des4">India's No.1 Online Makeup Course</td>
//       </tr>
//       <tr><td className="des4">Learn by LIVE Do-it-Together Classes</td></tr>
//       <tr><td className="des4">Unlimited Practise Session to master skills</td></tr>
//       <img src="beauty1.png" alt="image" width="250" height="252" /><br></br>
      
//       <img src="achievement.png" alt="image" width="250" height="252" /><br></br>
//       <img src="beauty1.png" alt="image" width="250" height="252" /><br></br>
//       </table>
//     </section>
    
        
//     </>
//   )
// }

// export default App

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="body">
        <img src="beauty.png" alt="image" width="375" height="124" /><br />
      </section>
      <section className="body">
        <table className="tab">
          <tbody>
            <tr>
              <td className="des">Professional Online <br />Makeup Course</td>
            </tr>
            <tr>
              <td className="des1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzLgF0pUp3BrZ1zxfcf9rjjhHr2DgO0xZ0g&usqp=CAU" width="18" height="14" alt="icon" /> Certification Programme</td>
              <td className="des3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEs3c-vaT2aVi9GkzOKqVPDB3ybYDjQvpMAA&usqp=CAU" width="11" height="10.56" alt="icon" />Rated 4.85/5</td>
            </tr>
            <tr>
              <td className="des4">India's No.1 Online Makeup Course</td>
            </tr>
            <tr><td className="des4">Learn by LIVE Do-it-Together Classes</td></tr>
            <tr><td className="des4">Unlimited Practise Session to master skills</td></tr>
            <tr>
              <td className="des">
                <img src="beauty1.png" alt="image" width="250" height="252" className="outer-image" />Get Certified From<br></br> India's Biggest <br></br>Beauty Platform
                <img src="achievement.png" alt="image" width="250" height="252" />
              </td>
            </tr>
            <tr>
              <td>
                <img src="beauty1.png" alt="image" width="250" height="252" /><br />
                <div className="text-overlay">Why Should You<br></br>Join Airblack</div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default App;

