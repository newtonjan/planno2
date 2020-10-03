import React from 'react'
import {Card} from 'react-bootstrap'

export const Task = (props) => {
    const { id, text, deadline, importance, length, completion } = props.task;
    
    return (
        <div style={{ padding: "10px"}}>
        <Card style = {{width: "100%", color: "#fff", background: "#87C38F", padding: "0px 10px", textAlign: "left", align: "center"}}>
            <Card.Text>{text} <span style = {{float: "right"}}> ... within {deadline} days </span></Card.Text>
        </Card>
        </div>
    )
}
