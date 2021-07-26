import React from 'react'

export default function index(props:any) {
    return (
        <div>
            <h2>Header</h2>
            {props.children}
        </div>
    )
}
