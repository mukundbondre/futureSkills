import React, { useState } from 'react';
import validator from 'validator'

import './popup.css';
import axios from 'axios';

function Popup({ setPopup }) {
    const [data, setData] = useState({});

    const handelSubmit = (e) => {
        e.preventDefault();

        if (validator.isURL(data.link)) {
            axios.post("http://localhost:8080/cards", data).then((res) => {
                console.log(res.data);
            }).catch((error) => {
                console.log(error);
            })

            setPopup(false);
        } else {
            alert("Invalid URL");
        }
    }
    return (
        <div className='popup'>
            <form onSubmit={handelSubmit}>
                <h1>Add data</h1>
                <input type='text'
                    placeholder='Title'
                    value={data.title}
                    onChange={(e) => { setData({ ...data, title: e.target.value }) }}
                    required
                />
                <input type='text'
                    placeholder='Description'
                    value={data.description}
                    onChange={(e) => { setData({ ...data, description: e.target.value }) }}
                    required
                />
                <input type='link'
                    placeholder='Link'
                    value={data.link}
                    onChange={(e) => { setData({ ...data, link: e.target.value }) }}
                    required
                />
                <button type='submit' className='submitBtn'>Submit</button>
            </form>
        </div>
    )
}

export default Popup