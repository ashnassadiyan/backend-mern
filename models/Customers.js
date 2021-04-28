import mongoose from 'mongoose'

const CustomerSchema = mongoose.Schema({
    id: { type: Number, unique: true },
    created: { type: Date, default: Date.now },
    name: String,
})

CustomerSchema.pre
export default mongoose.model('customer', CustomerSchema)