import React, { Component } from 'react'
import { useSelector } from 'react-redux'


export default function Infor(){
    const coust = useSelector(state => state.coust)
    const list = useSelector(state => state.list)
    return(
        <div>
            <h2>Redux Demo</h2>
            <p>Current Value: {coust}</p>
            <p>Array: {list.toString()}</p>
        </div>
    )
}