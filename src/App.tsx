import './App.css';
import React, { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { createUseGesture, dragAction, pinchAction } from '@use-gesture/react'
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardLong from './CardLong';
import CardLongHelp from './CardLongHelp';

export default function App() {
  const [needHelp, setNeedHelp] = useState(["", "", ""])
  
  // const onChangeHandler = (e: { target: { value: any; }; }) => {
  //   let newArr = [...needHelp]; // copying the old datas array
  //   newArr[0] = e.target.value;
  //   setNeedHelp(newArr);
  // };

  const handleChange = (tag: any) => (e: { target: { value: any; }; }) => {
    let newArr = [...needHelp];
    newArr[tag] = e.target.value;
    setNeedHelp(newArr);
  };
  
  return (
    <div className="">
      <div className="Popup" style={{position: 'absolute', backgroundColor: 'lightgray', 'zIndex': 5, 'borderRadius': "8px"}}>
        <div className="PopupContent">
          <p className="SmallTitle">Your team*</p>
          <input className="BasicInput" value={needHelp[0]} onChange={handleChange(0)} placeholder="Type your team name..."/>
          <p className="SmallTitle">What your team does*</p>
          <textarea rows={2} value={needHelp[1]} onChange={handleChange(1)} className="BasicInput" placeholder="Type what your team does..."/>
          <p className="SmallTitle">What your team is looking for*</p>
          <textarea rows={4} value={needHelp[2]} onChange={handleChange(2)} className="BasicInput" placeholder="Type what your team is looking for..."/>
          <button className="BasicButton CautionButton" style={{marginLeft: '0px', display: 'inline'}}>Cancel</button>
          <button className="BasicButton" style={{marginLeft: '10px', display: 'inline'}}>Add</button>
        </div>
      </div>
      {/* <div className="Popup" style={{position: 'absolute', backgroundColor: 'lightgray', 'zIndex': 5, 'borderRadius': "8px"}}>
        <div className="PopupContent">
          <p className="SmallTitle">Your Name*</p>
          <input className="BasicInput" placeholder="Type your name..."/>
          <p className="SmallTitle">What you can help with*</p>
          <textarea rows={2} className="BasicInput" placeholder="Type what you can help with..."/>
          <p className="SmallTitle">What you're interested in</p>
          <textarea rows={4} className="BasicInput" placeholder="Type what you're interested in..."/>
          <button className="BasicButton CautionButton" style={{marginLeft: '0px', display: 'inline'}}>Cancel</button>
          <button className="BasicButton" style={{marginLeft: '10px', display: 'inline'}}>Add</button>
        </div>
      </div> */}
      <div>
        <p className="MediumTitle" style={{position: 'relative', margin: '1%'}}>Post it</p>
      </div>
      <div style={{marginTop: '20px'}}>
        <Row>
          <Col>
            <div style={{textAlign: 'center', marginTop: '15px', marginBottom: '15px'}}>
              <p className="MediumTitle" style={{position: 'relative', textAlign: 'center', display: 'inline'}}>Need Help</p>
              <button className="BasicButton" style={{marginLeft: '10px'}}>Add</button>
            </div>
            <Row style={{margin: '1%'}}>
              <Col>
                <CardLong />
              </Col>
              <Col>
                <CardLong />
              </Col>
            </Row>
          </Col>
          <Col>
            <div style={{textAlign: 'center', marginTop: '15px', marginBottom: '15px'}}>
              <p className="MediumTitle" style={{position: 'relative', textAlign: 'center', display: 'inline'}}>Can Help</p>
              <button className="BasicButton" style={{marginLeft: '10px'}}>Add</button>
            </div>
            <Row style={{margin: '1%'}}>
              <Col>
                <CardLongHelp />
              </Col>
              <Col>
                <CardLongHelp />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}