import { React, useState } from 'react'
import './Home.css'
import profile from '../static/profile.png'
import dashboard from '../static/dashboard.png'
import atr from '../static/at_r.png'
import ma from '../static/ma.png'
import gl from '../static/gl.png'
import Dashboard from '../components/Dashboard'
import Attendance from '../components/Attendance'
import Record from '../components/Record'
import List from '../components/List'

const Home = () => {
    let [page, setPage] = useState('');

    const handleClick = (pagename) => {
        setPage(pagename);
    }

  return (
    <div className = 'body'>
        <div className = 'top-bar'>
            <h1 className='title'>TA.AI</h1>
            <img src = {profile} alt = 'Profile Pic' className='profile'/>
        </div>
        <div className = 'bot-div'>
            <div className='left-div'>
                
                <button className='dashboard' onClick={() => {handleClick('dashboard')}}><img src = {dashboard} alt = 'Profile Pic' className='d-pic'/>Dashboard</button>
                <button className='attendance-record' onClick={() => {handleClick('record')}}><img src = {atr} alt = 'Profile Pic' className='atr-pic'/>Attendance Record</button>
                <button className='mark-attendance' onClick={() => {handleClick('attendance')}}><img src = {ma} alt = 'Profile Pic' className='ma-pic'/>Mark Attendance</button>
                <button className='generate-list' onClick={() => {handleClick('list')}}><img src = {gl} alt = 'Profile Pic' className='gl-pic'/>Generate List</button>
            </div>
            <div className='right-div'>
                {page === '' ? <h1 className='welcome-main'>Welcome Mr. **Name**.</h1> : <></>}
                {page === 'dashboard' ? <Dashboard/> : <></>}
                {page === 'record' ? <Record/> : <></>}
                {page === 'attendance' ? <Attendance/> : <></>}
                {page === 'list' ? <List/> : <></>}
            </div>
        </div>
    </div>
  )
}

export default Home
