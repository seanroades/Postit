import './App.css';
import React, { useEffect } from 'react'


export default function LongCardHelp() {
  return (
    <div className="LongCardBG">
        <div style={{margin: "2%"}}>
            <p className="SmallTitle" style={{display: 'inline'}}>Name:</p>
            <p className="MediumText" style={{display: 'inline'}}> Sean Roades</p>
            <br />
            <p className="SmallTitle" style={{display: 'inline'}}>What I can help with:</p>
            <p className="MediumText" style={{display: 'inline'}}> Software engineering, mobile app design</p>
            <br />
            <p className="SmallTitle" style={{display: 'inline'}}>What I'm interested in:</p>
            <p className="MediumText" style={{display: 'inline'}}> Crypto-based applications/teams</p>
            <br />
            <br />
            <button className="BasicButton" style={{marginTop: '5px'}}>Contact me</button>
        </div>
    </div>
  )
}