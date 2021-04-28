import mongoose from 'mongoose'


const IssueSchema = mongoose.Schema({
    custno: { type: Number, required: true },
    issueType: String,
    create: { type: Date, default: Date.now },
})

export default mongoose.model('issue', IssueSchema)