"use client"
import React from 'react'
import Searchbar from '@/Components/Searchbar';
import LoginForm from './LoginForm';

const Sidebar = () => {
  return (
    <div className=' border2 h-screen w-full bg-slate-500'>
      {/* <Searchbar/> */}
      <LoginForm/>
    </div>
  )
}

export default Sidebar