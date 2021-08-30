import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {

  return (
    <Fragment>
      <Head>
        <title>React Meetup</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
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

  const client = await MongoClient.connect("mongodb://admin:admin@cluster0-shard-00-00.ngw9q.mongodb.net:27017,cluster0-shard-00-01.ngw9q.mongodb.net:27017,cluster0-shard-00-02.ngw9q.mongodb.net:27017/meetups?ssl=true&replicaSet=atlas-420w61-shard-0&authSource=admin&retryWrites=true&w=majority");
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const result = await meetupsCollection.find().toArray();
  console.log(result);
  client.close();
  return {
    props: {
      meetups: result.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1
  };
}
export default HomePage;