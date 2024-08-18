import React, { useState } from 'react';

import './App.css';

function Popup({ setPopup }) {
    const [data, setData] = useState({});

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        setPopup(false)
    }
    return (
        <div className='popup'>
            <form onSubmit={handelSubmit}>
                <h1>Add data</h1>
                <input type='text'
                    placeholder='Title'
                    value={data.title}
                    onChange={(e) => { setData({ ...data, title: e.target.value }) }}
                />
                <input type='text'
                    placeholder='Description'
                    value={data.description}
                    onChange={(e) => { setData({ ...data, description: e.target.value }) }}
                />
                <input type='text'
                    placeholder='Link'
                    value={data.link}
                    onChange={(e) => { setData({ ...data, link: e.target.value }) }}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Popup