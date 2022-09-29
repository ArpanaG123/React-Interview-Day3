import React from 'react'
import './Style.css'

const Day3 = () => {
  return (
    <div>
        <h3>Question1:Difference between Axios and fetch?</h3>
        <p>
            AXIOS
            <ul className='items'>
                <li>In Axios,the data is sent through data property.</li>
                <li>Axios has URL in request object.</li>
                <li>Axios's data contains the objects.</li>
                <li>Axios performs automatic transformation of JSON data.</li>
                <li>Axios alllow cancelling request & request timeout.</li>
            </ul>
            FETCH
            <ul className='items'>
                <li>In fetch,the data is sent through body property.</li>
                <li>Fetch has no URL in request object.</li>
                <li>Fetch's body has to be stringified.</li>
                <li>Fetch is a two step process when handling with JSON data,first one is to make the actual request & second one is to call .json() method on the response. </li>
            </ul>
        </p>
    </div>
  )
}

export default Day3