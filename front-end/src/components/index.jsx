import React from 'react'


export default function Label(props) {
    return (
        <label for={props.for}>{props.texto}</label>
    );
}