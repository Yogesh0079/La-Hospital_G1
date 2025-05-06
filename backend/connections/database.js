import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:32768/lhospital")
    .then(() => console.log('Connected to database!'))
    .catch((err) => console.log('Error connecting to database:', err));

function get_enumeration(reqDataType, typeMap) {
    if (!reqDataType) return null;
    if (typeof reqDataType === "number") return reqDataType;
    const data_encoded = Object.keys(typeMap).find(key => typeMap[key] === reqDataType);
    return data_encoded ? parseInt(data_encoded) : null;
}

function rev_enumeration(reqDataType, typeMap) {
    if (!reqDataType) return null;
    const data_decoded = typeMap[reqDataType] || null;
    return data_decoded;
}

async function createDb(objData, dataSchema, deb_name) {
    // Create a new object of specified schema and save it to the database
    let obj = new dataSchema(objData);
    return await obj.save().catch((err) => {
        console.log(`${deb_name} Error: ${err}`);
        err.error = `${deb_name}`;
        return err;
    });
}

async function readDb(id, dataSchema, deb_name) {
    return dataSchema.findById(id).catch((err) => {
        err.error = `${deb_name}`;
        return err;
    });
}
async function readDbField(field, value, dataSchema, deb_name) {
    return dataSchema.findOne({[field]: value}).catch((err) => {
        err.error = `${deb_name}`;
        return err;
    });
}

async function updateDb(id, updateFields, dataObject, deb_name) {
    return await dataObject.findOneAndUpdate({_id: id}, updateFields, {returnOriginal: false}).then((obj) => {
        console.log(`Object for ${deb_name} updated successfully!`);
        return obj;
    }).catch((err) => {
        err.error = `${deb_name}`;
        return err;
    });
}

export {get_enumeration, rev_enumeration, createDb, readDb, updateDb, readDbField};
export default mongoose.connection;