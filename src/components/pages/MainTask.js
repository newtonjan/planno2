import React from 'react'
import { Task } from '../Task';
import { Container } from 'react-bootstrap';

export const MainTask = (props) => {
    const tasks = props.tasks;
    const reducer = (prevTop, currentTask) => (1 / prevTop.deadline * prevTop.importance) > (1 / currentTask.deadline * currentTask.importance) ? prevTop : currentTask;
    const topTask = tasks.reduce(reducer);

    return (
        <Container fluid ="sm" style= {{alignItems: "center"}}>
            <h1>What should I do next?</h1>
            <Task key = {topTask.id} task = {topTask} />
            <br />
           <h1>What else?</h1>
            {tasks.filter(task => task.id !== topTask.id).map(task => (
                <Task key = {task.id} task = {task} />
            ))}
        </Container>
    )
}
