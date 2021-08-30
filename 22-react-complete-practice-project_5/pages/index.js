import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!'
    }
];

function HomePage(props) {

    return (
        <MeetupList meetups={props.meetups} />
    );
}

// export async function getServerSideProps(context) {
//     const req =context.res;
//     const res =context.req;
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//     };
// };
//like cache system (Laravel !!!)
export async function getStaticProps() {
    // fetch data from an API
    return {
      props: {
        meetups: DUMMY_MEETUPS
      },
      revalidate: 1
    }; 
  }
export default HomePage;