import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect("mongodb://admin:admin@cluster0-shard-00-00.ngw9q.mongodb.net:27017,cluster0-shard-00-01.ngw9q.mongodb.net:27017,cluster0-shard-00-02.ngw9q.mongodb.net:27017/meetups?ssl=true&replicaSet=atlas-420w61-shard-0&authSource=admin&retryWrites=true&w=majority");
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({message:'meetup inserted.'});

    }
}

export default handler;