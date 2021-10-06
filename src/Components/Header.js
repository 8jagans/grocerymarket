import React from 'react'
import './Header.css';
import LOGO_TITLE from '../Images/LOGO_TITLE.png';

export default function Header() {
return (
<div>
    <div className="header">
    <img className="tlogo" src={LOGO_TITLE}></img>   
    <ul className="list1">
        <li className="list1element"><a href="#home"> Home </a></li>
        <li className="list1element"><a href="#shop"> Shop </a></li>
        <li className="list1element"><a href="#bestsellers"> Best Sellers </a></li>
        <li className="list1element"><a href="#cus"> Contact Us </a></li>
    </ul>
         
    </div>
</div>
)
}
