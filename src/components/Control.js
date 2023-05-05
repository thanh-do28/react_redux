import React from 'react'
import { useDispatch } from 'react-redux'
import { act_count_down, act_count_up, act_list_random } from '../action'

export default function Control() {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=> dispatch(act_count_up(3))}>UP</button>
        <button onClick={()=> dispatch(act_count_down(3))}>DOWN</button>
        <button onClick={()=> dispatch(act_list_random())}>RANDOM</button>
    </div>
  )
}

