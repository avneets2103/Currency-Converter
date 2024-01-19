import React, { useEffect, useState } from 'react'
import './InputBox.css'

function InputBox(props) {
    const message = props.message;
    const inputAll = (message=='From');

    let from = props.from;
    const setFrom = props.setFrom;
    let fromCurr = props.fromCurr;
    const setFromCurr = props.setFromCurr;
    let to = props.to;
    const setTo = props.setTo;
    let toCurr = props.toCurr;
    const setToCurr = props.setToCurr;

    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurr}.json`;
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const fromRate = data[fromCurr][toCurr];
            if(fromRate){
                setTo(from*fromRate);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        }, [fromCurr, from, toCurr, to]);
    
    if(inputAll){
        return (
            <div className='flex-col box'>
                <p>{message}</p>
                <div className='flex'>
                    <input type="text" className='p-2' onChange={(e)=>{setFrom(Number(e.currentTarget.value))}} value={from}/>
                    <select className='text-white px-3 mx-2' onChange={(e)=>{setFromCurr(e.currentTarget.value)}} value={fromCurr}>
                        <option value="inr">inr</option>
                        <option value="usd">usd</option>
                        <option value="abt">abt</option>
                        <option value="ach">ach</option>
                        <option value="acs">acs</option>
                        <option value="ada">ada</option>
                        <option value="aed">aed</option>
                        <option value="all">all</option>
                        <option value="ape">ape</option>
                        <option value="azn">azn</option>
                        <option value="bit">bit</option>
                    </select>
                </div>
            </div>
        )
    }
    return (
        <div className='flex-col box'>
            <p>{message}</p>
            <div className='flex'>
                <input type="text" className='p-2' readOnly={true} value={to}/>
                <select className='text-white px-3 mx-2' onChange={(e)=>{setToCurr(e.currentTarget.value)}} value={toCurr}>
                    <option value="inr">inr</option>
                    <option value="usd">usd</option>
                    <option value="abt">abt</option>
                    <option value="ach">ach</option>
                    <option value="acs">acs</option>
                    <option value="ada">ada</option>
                    <option value="aed">aed</option>
                    <option value="all">all</option>
                    <option value="ape">ape</option>
                    <option value="azn">azn</option>
                    <option value="bit">bit</option>
                </select>
            </div>
        </div>
    )
}

export default InputBox
