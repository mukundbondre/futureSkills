import { useEffect, useState } from 'react';
import './App.css';
import Popup from './Popup';
import axios from 'axios';

function App() {

  const [popup, setPopup] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8080/cards").then((res) => {
      console.log(res.data);
      setData(res.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [popup])

  const handelClick = (e) => {
    e.preventDefault();
    setPopup(true)
  }

  return (
    <div className='container'>
      <div className='header'>
        <p>Abstract | Help center</p>
        <button onClick={handelClick} className='addBtn'>Submit a request</button>
      </div>
      <div className='search'>
        <input type='text'
          placeholder='Search Title'
          onChange={(e) => { setSearch(e.target.value) }}
        />
      </div>
      {
        data.filter((item) => {
          return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search);
        }).map((e) => {
          return (
            <div className='card'>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
            </div>
          )
        })
      }
      <div className='footer'>
        <div>
          <h2>Abstract</h2>
          <p>Branches</p>
        </div>
        <div>
          <h2>Resources</h2>
          <p>Blog</p>
          <p>Help center</p>
          <p>Release Notes</p>
          <p>Status</p>
        </div>
        <div>
          <h2>Community</h2>
          <p>Twitter</p>
          <p>Linked In</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <div>
          <h2>Company</h2>
          <p>About Us</p>
          <p>Careers</p>
        </div>
        <div>
          <h2>Contact</h2>
          <a>mukundbondre41@gmail.com</a>
          <p>+91 96654-88242</p>
        </div>
      </div>
      {popup ? <Popup setPopup={setPopup} /> : null}      
    </div>
  );
}

export default App;
