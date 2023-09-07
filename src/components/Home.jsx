import { useState } from "react"
import { Container, Row, Card } from "react-bootstrap"

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

    // function to add task to the you want ( dynamic day)

    // 

    return (

        <>
            <Container>
                <Row>
                    <h3>Weekly Planner</h3>
                    <h4>Week nº {weeknum}</h4>
                </Row>
            </Container>


            {/* this body will be filled by a map and a state([]) */}
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Monday - {monthDay}</Card.Title>
                    <div>
                        <input type="checkbox" name="dynStateName" id="dynStateID" />
                        <label htmlFor="dynStateName">done or not</label>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Home