import { MongoClient } from "mongodb";
const handler = async (req, res)=>
{
    if(req.method === 'POST')
    {
        const data = req.body;

        const client =await MongoClient.connect('mongodb+srv://sheharyar:Sheharyar333@cluster0.euyej.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();
        const meetupCollections = db.collection('meetups');

       const result = await meetupCollections.insertOne(data);

       console.log(result);

       client.close();

       res.status(201).json({message: 'Meetup inserted!'});
    }
}

export default handler;