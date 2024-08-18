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

  const row = data.filter((item) => {
    return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search);
  }).map((e) => {
    return (
      <tr key={e.id}>
        <td>{e.title}</td>
        <td>{e.description}</td>
        <td>{e.link}</td>
      </tr>
    )
  })
  return (
    <div className='container'>
      <div className='search'>
        <input type='text'
          placeholder='Search Title'
          onChange={(e) => { setSearch(e.target.value) }}
        />
        <button onClick={handelClick} className='addBtn'>Add Data</button>
      </div>
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
            {row}
          </tbody>
        </table>
      </div>
      {popup ? <Popup setPopup={setPopup} /> : null}
    </div>
  );
}

export default App;
