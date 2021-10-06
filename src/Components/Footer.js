import React from 'react'
import LOGO_TITLE from '../Images/LOGO_TITLE.png';
import F02 from '../Images/F02.png';
import SM01 from '../Images/SM01.png';
import SM02 from '../Images/SM02.png';
import SM03 from '../Images/SM03.png';
import SM04 from '../Images/SM04.png';
import SM05 from '../Images/SM05.png';



import './Footer.css'


export default function Footer() {
return (
<div>
    <div className="foot">
        <img className="F01" src={LOGO_TITLE}></img>
        <img className="F02" src={F02}></img>
        <ul className="list2">
            <li> <a href="https://www.instagram.com/"> <img className="SM" SRC={SM01}></img> </a> </li>
            <li> <a href="https://www.facebook.com/" > <img className="SM" SRC={SM02}></img> </a>  </li>
            <li> <a href="https://www.twitter.com/"> <img className="SM" SRC={SM03}></img> </a> </li>
            <li> <a href=""> <img className="SM" SRC={SM04}></img> </a> </li>
            <li> <a href=""> <img className="SM" SRC={SM05}></img> </a> </li>
        </ul>
    </div>   
    <div className="foot1">
        <p className="para"> <span className="p1"> Address : </span> No:60 A, East Main Street, <br/> Bangalore, Karnataka, India </p>
        <p className="para"> <span className="p1"> Email : </span> cus@grocy.in  <br/> <span className="p1"> Phone :</span> +91 9876543210 </p>
        <a className="para2" href="#aus"> <p className="para21" > About Us </p> </a>
        <a className="para2" href="#cus"> <p className="para21" > Contact Us </p> </a>
    </div>
</div>
)
}
