import mongoose from 'mongoose'

const ItemsSchema = mongoose.Schema({
    descrption: { type: String, required: true },
    created: { type: Date, default: Date.now },
    retailPrice: { type: mongoose.Decimal128, default: 0.00 }
})

export default mongoose.model('item', ItemsSchema)