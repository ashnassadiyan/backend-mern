import mongoose from 'mongoose'

const PatientSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    dob: { type: Date, required: true },
    address: { type: String, required: true }
})

export default mongoose.model('patient', PatientSchema)