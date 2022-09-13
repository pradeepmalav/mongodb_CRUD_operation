import { insert, records, update,del } from '../services/userServices.js'

//All Records
export const allRecord = async (req, res) => {
    let result = await records()
    // console.log(result);
    if (result.length != 0) {
        res.json({
            success: true,
            result: result
        })
    }
    else {
        res.json({
            success: false,
            message: 'Empty record !'
        })
    }

    return false
}

//insert record
export const insertRecord = async (req, res) => {
    const body = req.body;
    console.log(body);
    // return false

    const result = await insert(body);
    console.log(result);
    // return false
    
    if (result.acknowledged == true) {
        res.json({
            success: true,
            result: result,
            message: 'New Record Inserted'
        })
    }
    else {
        res.json({
            success: false,
            message: 'Record not inserted'
        })

        // return false
    }
}

//update record
export const updateRecord = async (req, res) => {
    const body = req.body;

    const result = await update(body);
    console.log(result);
    // return false
    if (result.modifiedCount >= 1) {
        res.json({
            success: true,
            result: result,
            message: 'Update Record Succesfully'
        })
    }
    else {
        res.json({
            success: false,
            message: 'Record not updated'
        })

        // return false
    }
}

//delete record
export const deleteRecord = async (req, res) => {
    const body = req.body;
    // console.log(body)
    // return false
    const result = await  del(body);
    console.log(result);

    if (result.deletedCount >= 1) {
        res.json({
            success: true,
            result: result,
            message: 'Record Deleted '
        })
    }
    else {
        res.json({
            success: false,
            message: 'Record not deleted'
        })

        // return false
    }

}