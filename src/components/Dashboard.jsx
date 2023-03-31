import React, { useEffect, useState } from 'react'
import './Dashboard.css';

const Dashboard = () => {


    const [targetData, setTargetData] = useState({});

    const hadleChange = (e) => {
        setTargetData({
            ...targetData,
            [e.target.name]: e.target.value.toUpperCase()
        })
    }

    const sendData = async () => {
        fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(targetData)
        }).then(res => {
            document.getElementById('targetTitle').value = '';
            document.getElementById('targetText').value = ''
            setTargetData({})

            if (res.statusText === 'OK') return true
            return false
        })
    }




    return (
        <div className='Dashboard-content'>
            <div className='dashboard-target'>
                <div className='target-header'>
                    <label htmlFor="targetTitle">Tilte:</label>
                    <input type="text" name="targetTitle" id='targetTitle' onChange={hadleChange} />
                </div>
                <div className='target-description'>
                    <label>Description: </label>
                    <textarea name="targetText" id='targetText' onChange={hadleChange}></textarea>
                </div>
                <div className='target-btn'>
                    <button className='addBtn' onClick={sendData} >Add</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;