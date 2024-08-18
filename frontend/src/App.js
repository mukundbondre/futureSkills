import { useState } from 'react';
import './App.css';
import Popup from './Popup';

function App() {

  const [popup, setPopup] = useState(false)
  const handelClick = (e) => {
    e.preventDefault();
    setPopup(true)
  }
  return (
    <div className='container'>
      <button onClick={handelClick} className='addData'>add data</button>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>title1</td>
              <td>description1</td>
              <td>link1</td>
            </tr>
          </tbody>
        </table>
      </div>
      {popup?<Popup setPopup={setPopup}/>:null}
    </div>
  );
}

export default App;
