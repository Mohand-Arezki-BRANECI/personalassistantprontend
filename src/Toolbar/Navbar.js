import React, {useState, useEffect} from 'react'



export default function Navbar(){
  return (
    <nav>
      <ul className="liste">
        <li className="items">Acceuil</li>
        <li className="items">Services</li>
        <li className="items">Contact</li>
      </ul>
      <button className="btn">BTN</button>
    </nav>
  )
}