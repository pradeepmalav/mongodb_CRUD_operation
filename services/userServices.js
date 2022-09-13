import { dbConnect } from '../config/db.js';

// dbConnect().then((res) => {
//         res.find({}).toArray().then((data) => {
//             console.log(data);
//         })
//     })

//All records
export const records = async () => {
    let data = await dbConnect();
    data = await data.find({}).toArray();
    // console.log(data);
    // return false
    return data;
}

//insert record
export const insert = async (data) => {
   console.log(data);
    const db = await dbConnect();
    // console.log('hello');
    
    const result = await db.insertOne(data)
        // {
        //     "name": "yara",
        //     "post": "developer",
        //     "age": 30
        // }
        // )
    return result;
    
}

//update record
export const update = async (data) => {
    const {name,age} = data;
    const db = await dbConnect();
    const result = await db.updateOne({name},{$set:{age}})
    
    return result;

}

//delete record
export const del = async (data) => {
    const { name } = data;
    // console.log(data);
    const db = await dbConnect();
    const result = await db.deleteOne({name})
    return result;

}