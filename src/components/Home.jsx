import { useState } from "react"
import { Container, Row, Card, Form, Button, Col } from "react-bootstrap"

const Home = () => {

    const [tasks, setTasks] = useState([])

    const [wantWekends, setWantWekends] = useState(false)


    //new task
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")
    const [date, setDate] = useState(new Date())

    //create task
    const createTask = (e) => {
        e.preventDefault()

        // create a random ID
        function generateUniqueId() {
            let randomId;

            do {
                randomId = Math.floor(Math.random() * 1000000) + 1;
            } while (tasks.includes(randomId));

            return randomId;
        }

        //retrieve the day of the week from the introduced date 
        // const weekDayNumber = date.getDay() => date already gives the day of the week

        setTasks(...tasks,
            { id: generateUniqueId(), title: title, startTime: startTime, endTime: endTime, date: date, isDone: false })

    }

    // function to modify task ( dynamic day)
    const modifyTask = () => { }
    // use .filter to select tasks


    function getCurrentWeekNumber() {
        const today = new Date();
        const yearStart = new Date(today.getFullYear(), 0, 1);
        const dayOfWeek = today.getDay();

        // Calculate the week number
        const weekNumber = Math.ceil(((today - yearStart) / 86400000 + 1 + (dayOfWeek - 1)) / 7);
        return weekNumber;
    }

    return (

        <>
            <Container>
                {/* <Row> */}
                <h3>Weekly Planner</h3>
                <h4>Week nº {getCurrentWeekNumber()}</h4>
                {/* </Row> */}
            </Container>

            {/* map all days dynamically and inside to select which day fill, use date */}
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="bg-success">Monday - task.date</Card.Title>

                                {/* this body will be filled by a map and a state([]) */}
                                <div>
                                    <input type="checkbox" name="dynStateName" id="dynStateID" />
                                    <label htmlFor="dynStateName">task</label>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="bg-success">Tuesday - task.date</Card.Title>

                                {/* this body will be filled by a map and a state([]) */}
                                <div>
                                    <input type="checkbox" name="dynStateName" id="dynStateID" />
                                    <label htmlFor="dynStateName">task</label>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="bg-success">Wednesday - task.date</Card.Title>

                                {/* this body will be filled by a map and a state([]) */}
                                <div>
                                    <input type="checkbox" name="dynStateName" id="dynStateID" />
                                    <label htmlFor="dynStateName">task</label>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="bg-success">Thursday - task.date</Card.Title>

                                {/* this body will be filled by a map and a state([]) */}
                                <div>
                                    <input type="checkbox" name="dynStateName" id="dynStateID" />
                                    <label htmlFor="dynStateName">task</label>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="bg-success">Friday - task.date</Card.Title>

                                {/* this body will be filled by a map and a state([]) */}
                                <div>
                                    <input type="checkbox" name="dynStateName" id="dynStateID" />
                                    <label htmlFor="dynStateName">task</label>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {wantWekends && <>

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title className="bg-success">Saturday - task.date</Card.Title>

                                    {/* this body will be filled by a map and a state([]) */}
                                    <div>
                                        <input type="checkbox" name="dynStateName" id="dynStateID" />
                                        <label htmlFor="dynStateName">task</label>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title className="bg-success">Sunday - task.date</Card.Title>

                                    {/* this body will be filled by a map and a state([]) */}
                                    <div>
                                        <input type="checkbox" name="dynStateName" id="dynStateID" />
                                        <label htmlFor="dynStateName">task</label>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col></>}
                </Row>
            </Container>


            <Button onClick={() => setWantWekends(!wantWekends)}>Weekends On/Off</Button>
            {/* task creator form */}
            <Container>
                <Form className="mt-5" onSubmit={(e) => createTask(e)}>

                    <Form.Control type="text" placeholder="Task title" onChange={(e) => setTitle(e.target.value)} />

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Date</Form.Label>
                        <input type="date" name="" id="" value={date} onChange={(e) => setDate(e.target.value)} />
                        <Form.Label>Start time</Form.Label>
                        <input type="time" name="" id="" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                        <Form.Label>Finish time</Form.Label>
                        <input type="time" name="" id="" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </Container>

        </>
    )
}

export default Home