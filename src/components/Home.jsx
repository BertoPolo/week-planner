import { useState } from "react"
import { Container, Row, Card, Form } from "react-bootstrap"

const Home = () => {

    const [weeknum, setWeeknum] = useState(0)
    const [monthDay, setMonthDay] = useState(1)
    const [monTasks, setMonTasks] = useState([])
    const [TueTasks, setTueTasks] = useState([])
    const [wedTasks, setWedTasks] = useState([])
    const [thuTasks, setThuTasks] = useState([])
    const [friTasks, setFriTasks] = useState([])
    const [satTasks, setSatTasks] = useState([])
    const [sunTasks, setSunTasks] = useState([])


    // function to get the week number

    // function to create task ( dynamic day)

    // function to modify task ( dynamic day)

    return (

        <>
            <Container>
                <Row>
                    <h3>Weekly Planner</h3>
                    <h4>Week nº {weeknum}</h4>
                </Row>
            </Container>


            <div>


                {/* this body will be filled by a map and a state([]) */}
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Monday - {monthDay}</Card.Title>
                        <div>
                            <input type="checkbox" name="dynStateName" id="dynStateID" />
                            <label htmlFor="dynStateName">task</label>
                        </div>
                    </Card.Body>
                </Card>
            </div>


            <Container>
                <Form className="mt-5">

                    <Form.Control type="text" placeholder="Task title" />

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Date</Form.Label>
                        <input type="date" name="" id="" />
                        <Form.Label>Start time</Form.Label>
                        <input type="time" name="" id="" />
                        <Form.Label>Finish time</Form.Label>
                        <input type="time" name="" id="" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Container>

        </>
    )
}

export default Home