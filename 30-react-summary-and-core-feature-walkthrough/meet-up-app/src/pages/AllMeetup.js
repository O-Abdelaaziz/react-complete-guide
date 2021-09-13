import React, { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList';

// const DUMMY_DATA = [
//     {
//         id: 'm1',
//         title: 'This is a first meetup',
//         image:
//             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//             'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//         id: 'm2',
//         title: 'This is a second meetup',
//         image:
//             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//             'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
// ];

const AllMeetup = (props) => {
    const [meetups, setMeetups] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://react-http-c7642-default-rtdb.firebaseio.com/meetups.json')
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                setIsLoading(false);
                const meetups = [];
                for (const key in responseData) {
                    const meetup = {
                        id: key,
                        ...responseData[key]
                    }
                    meetups.push(meetup);
                }
                setMeetups(meetups);
            })

    }, [isLoading]);

    if (isLoading) {
        return <section><p>is loading ...</p></section>
    }
    return (
        <section>
            <h1>Meetups</h1>
            <MeetupList meetups={meetups} />
        </section>
    )
}

export default AllMeetup
