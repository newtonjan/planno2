import React from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';

export const AddTodo = (props) => {

    const tasks = props.tasks;

    return (
        <Container fluid="sm">
            <h1>Add to your list:</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Task</Form.Label>
                    <Form.Control placeholder = "Type a task" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Deadline</Form.Label>
                            <Form.Control placeholder = "How many days?" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Importance</Form.Label>
                            <Form.Control placeholder = "From 1-100" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Time Estimate</Form.Label>
                            <Form.Control placeholder = "How many hours?" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Completion</Form.Label>
                            <Form.Control placeholder = "What percent is done?" />
                        </Form.Group>
                    </Col>
                </Row>
                <br />
                <Button type ="submit" style = {{background: "#C55967", border: "none", fontSize: "30px"}}>Add task</Button>

            </Form>

        </Container>
    )
}
