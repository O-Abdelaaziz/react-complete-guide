import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetailsPage(props) {

    return (
        <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    );
}
export async function getStaticPaths() {
    const client = await MongoClient.connect("mongodb://admin:admin@cluster0-shard-00-00.ngw9q.mongodb.net:27017,cluster0-shard-00-01.ngw9q.mongodb.net:27017,cluster0-shard-00-02.ngw9q.mongodb.net:27017/meetups?ssl=true&replicaSet=atlas-420w61-shard-0&authSource=admin&retryWrites=true&w=majority");
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.find({}, { _id: 1 }).toArray();
    console.log(result);
    client.close();

    return {
        fallback: 'blocking',

        paths: result.map(item => (

            {
                params: {
                    meetupId: item._id.toString()
                }
            }

        ))
    }
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId;
    //this can't log in browser console ... it's running during build time in ide console
    console.log(meetupId);

    const client = await MongoClient.connect("mongodb://admin:admin@cluster0-shard-00-00.ngw9q.mongodb.net:27017,cluster0-shard-00-01.ngw9q.mongodb.net:27017,cluster0-shard-00-02.ngw9q.mongodb.net:27017/meetups?ssl=true&replicaSet=atlas-420w61-shard-0&authSource=admin&retryWrites=true&w=majority");
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
    console.log(result);
    client.close();

    return {
        props: {
            meetupData: {
                id: result._id.toString(),
                title: result.title,
                image: result.image,
                address: result.address,
                description: result.description
            },
        }
    };
};
export default MeetupDetailsPage;