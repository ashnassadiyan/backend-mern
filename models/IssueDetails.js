import mongoose from 'mongoose'

const IssueDetaSchema = mongoose.Schema({
    id: { type: Number, unique: true, required: true },
    issueid: { type: Number, required: true },
    issuedescription: { type: String, required: true }
})

export default mongoose.model('issue', IssueDetaSchema)