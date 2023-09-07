import { useState } from "react"
import { Container, Row, Card } from "react-bootstrap"

const Home = () => {

    const [weeknum, setWeeknum] = useState(0)
    const [monthDay, setMonthDay] = useState(1)

    return (

        <>
            <Container>
                <Row>
                    <h3>Weekly Planner</h3>
                    <h4>Week nº {weeknum}</h4>
                </Row>
            </Container>



            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Monday - {monthDay}</Card.Title>
                    <div>
                        <input type="checkbox" name="" id="" />

                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Home