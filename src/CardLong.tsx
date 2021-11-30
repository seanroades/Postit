import './App.css';
import React, { useEffect } from 'react'


export default function LongCard() {
  return (
    <div className="LongCardBG">
        <div style={{margin: "2%"}}>
            <p className="SmallTitle" style={{display: 'inline'}}>Team:</p>
            <p className="MediumText" style={{display: 'inline'}}> Uber4Cats</p>
            <br />
            <p className="SmallTitle" style={{display: 'inline'}}>What we do:</p>
            <p className="MediumText" style={{display: 'inline'}}> We help cats get from location to location through vehicles.</p>
            <br />
            <p className="SmallTitle" style={{display: 'inline'}}>What we're looking for:</p>
            <p className="MediumText" style={{display: 'inline'}}> We're looking for a software engineer to help us create our ride pick up algorithm</p>
            <br />
            <button className="BasicButton" style={{marginTop: '5px'}}>Contact us</button>
        </div>
    </div>
  )
}