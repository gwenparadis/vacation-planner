import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';


function Eventsavailable(props) {
    const allEvents = [
        {
            id: 1,
            title: "Jetski",
            level: "Easy/Medium",
            location: "Miami Beach",
            date: "Monday-Friday",
            time: "10am-5pm",
            screenshot: "Jetski.jpg"
        },

        {
            id: 2,
            title: "Dolphin Swimming",
            level: "Begginers",
            location: "Miami Beach",
            date: "Monday-Friday",
            time: "10am-5pm",
            screenshot: "Dolphin.jpg"
        },

        {
            id: 3,
            title: "Spa",
            level: "No experience required",
            location: "Spa room",
            date: "Monday-Sunday",
            time: "1pm-9pm",
            screenshot: "Spa.jpg"
        },

        {
            id: 4,
            title: "Dance",
            level: "Intermediate",
            location: "Dancehall",
            date: "Monday",
            time: "10am",
            screenshot: "Dance1.jpg"
        },

        {
            id: 5,
            title: "Ax Throwing",
            level: "Medium/Hard",
            location: "Backyard",
            date: "Monday-Sunday",
            time: "8am-3pm",
            screenshot: "Ax1.jpg"
        },
       
        {
            id: 6,
            title: "Paint",
            level: "Intermediate",
            location: "Mainhall",
            date: "Monday-Saturday",
            time: "5pm-8pm",
            screenshot: "Paint.jpg"
        },

        {
            id: 7,
            title: "Snorkeling",
            level: "Advanced",
            location: "Miami Harbor",
            date: "Saturday and Sunday",
            time: "1pm - 5pm",
            screenshot: "Snorkling.jpg"
        },

    ]

    return (
        <CardGroup>
            {allEvents.map((event, key) => (
                <Card key={key}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/" + event.screenshot} />
                    <Card.Body>
                        <Card.Title>Event {event.title}</Card.Title>
                        <Card.Text>
                            Level:{event.level}
                        </Card.Text>
                        <Card.Text>
                            Location:{event.location + "," + event.date + event.time}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={()=>props.addEvent(event)}variant="primary" size="lg" active>
                            View Activity
                        </Button>
                    </Card.Footer>
                </Card>)
            )}
        </CardGroup>)
}

export default Eventsavailable