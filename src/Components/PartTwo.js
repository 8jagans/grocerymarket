import React from 'react'
import C01 from '../Images/C01.png';
import C02 from '../Images/C02.png';
import P01 from '../Images/CAT01.png';
import P02 from '../Images/CAT02.png';
import P03 from '../Images/CAT03.png';
import P04 from '../Images/CAT04.png';
import PRO1 from '../Images/PRO1.jpg';
import PRO2 from '../Images/PRO2.jpg';
import PRO3 from '../Images/PRO3.jpg';
import PRO4 from '../Images/PRO4.jpg';
import PRO5 from '../Images/PRO5.jpg';
import PRO6 from '../Images/PRO6.jpg';
import PRO7 from '../Images/PRO7.jpg';
import PRO8 from '../Images/PRO8.jpg';
import PRO9 from '../Images/PRO9.jpg';
import COVER02 from '../Images/COVER2.png';
import A01 from '../Images/A02.png';



import './PartTwo.css'


export default function PartTwo() {

    const cntn = [
    { 
        id: 1, 
        sr : PRO1,
        ttlt: 'Watermelon',
        price:'300'
        },   
        { 
            id: 2, 
            sr : PRO2,
            ttlt: 'Tomato',
            price:'100'
        },   
        {
            id: 3, 
            sr : PRO3,
            ttlt: 'Potato',
            price:'100'
        },   
        { 
            id: 4, 
            sr : PRO4,
            ttlt: 'Coriander',
            price:'50'
        },
        { 
            id: 5, 
            sr : PRO5,
            ttlt: 'Egg',
            price:'30'
        },
        { 
            id: 6, 
            sr : PRO6,
            ttlt: 'Capsicum',
            price:'150'
        },
        { 
            id: 7, 
            sr : PRO7,
            ttlt: 'Fish Meat',
            price:'300'
        },
        { 
            id: 8, 
            sr : PRO8,
            ttlt: 'Fresh Meat',
            price:'300'
        },
        { 
            id: 9, 
            sr : PRO9,
            ttlt: 'Mushroom',
            price:'200'
        }
    ];

return (
<div>
    <div>
        <img className="C0" src={A01}/> 
        <br/>
        <img className="C1" src={C01}></img>
        <img className="C2" src={C02}></img>
    </div>    
        <h1 className="head1"> Our Products </h1>
    <div className="P1">
        <img className="P2" src={P01}></img>
        <img className="P2" src={P02}></img>
        <img className="P2" src={P03}></img>
        <img className="P2" src={P04}></img>
    </div>
    <div className="cards">
    {cntn.map((ele) => (
        <div className="containr">
            <img className="imgc" src={ele.sr} />
            <div className="texty">
                <p> {ele.ttlt} </p>
                <p> ₹ {ele.price} </p>  
                <p className="a2c"> Add to Cart </p>               
            </div>
        </div>
    ))}
    </div>
        <br/>
    <img className="covertwo" src={COVER02}></img>

</div>
)
}
