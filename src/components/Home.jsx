import { useState } from "react"
import { Container, Row, Card, Form, Button } from "react-bootstrap"

const Home = () => {

    const [monthDay, setMonthDay] = useState(1)  // wue es?
    // const [monTasks, setMonTasks] = useState([])
    // const [TueTasks, setTueTasks] = useState([])
    // const [wedTasks, setWedTasks] = useState([])
    // const [thuTasks, setThuTasks] = useState([])
    // const [friTasks, setFriTasks] = useState([])
    // const [satTasks, setSatTasks] = useState([])
    // const [sunTasks, setSunTasks] = useState([])
    const [tasks, setTasks] = useState([])

    // const [newTask, setNewTask] = useState({})

    //new task
    const [description, setDescription] = useState("")
    const [id, setId] = useState(0)
    const [title, setTitle] = useState("")
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")
    const [date, setDate] = useState(new Date())
    const [isDone, setIsDone] = useState(false) // guess is not needed

    // function to create task ( dynamic day)
    const createTask = () => {

        // create a random ID
        function generateUniqueRandomId() {
            let randomId;

            do {
                randomId = Math.floor(Math.random() * 1000000) + 1;
            } while (tasks.includes(randomId));

            return randomId;
        }

        //retrieve the day of the week from the introduced date 
        const weekDayNumber = date.getDay()
        setTasks(...tasks, [id, title, startTime, endTime, date, isDone, weekDayNumber])

    }

    // function to modify task ( dynamic day)
    const modifyTask = () => { }
    // use .filter 


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
                <Row>
                    <h3>Weekly Planner</h3>
                    <h4>Week nº {getCurrentWeekNumber()}</h4>
                </Row>
            </Container>


            <div>


                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="bg-success">Monday - {monthDay}</Card.Title>

                        {/* this body will be filled by a map and a state([]) */}
                        <div>
                            <input type="checkbox" name="dynStateName" id="dynStateID" />
                            <label htmlFor="dynStateName">task</label>
                        </div>
                    </Card.Body>
                </Card>
            </div>


            <Container>
                <Form className="mt-5" onSubmit={() => createTask()}>

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
                        <Form.Control as="textarea" rows={3} value={description} />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </Container>

        </>
    )
}

export default Home