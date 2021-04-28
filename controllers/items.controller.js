
import item from '../models/Items.js'
import itemResource from '../resources/items/items.resource.js'
import { ITEMS_NOT_FOUND, COMMON_ERRO, COMMON_SUCCESS } from '../helpers/messages.js'


const create = async (req, res) => {
    const { descrption, retailPrice } = req.body
    try {
        const response = await item.create({
            descrption,
            retailPrice
        })
        itemResource(res, 200, [], COMMON_SUCCESS)
    } catch (err) {
        itemResource(res, 500, [], COMMON_ERRO)
    }
}
const index = async (req, res) => {
    try {
        item.find((err, data) => {
            data ?
                itemResource(res, 200, data)
                :
                itemResource(res, 200, data, ITEMS_NOT_FOUND)
        })
    } catch {
        res.status(500).send(COMMON_ERRO)
    }

}
const get = async (req, res) => {
    const _id = req.params.id
    let data = {};
    try {
        data = await item.findOne({ _id }).lean()
    } catch (error) {
        res.status(500).send(err)
    }

    data ?
        itemResource(res, 200, data)
        :
        itemResource(res, 200, data, ITEMS_NOT_FOUND)


}
const update = async (req, res) => {
    const { descrption, retailPrice, _id } = req.body
    try {
        await item.findByIdAndUpdate(_id, { descrption, retailPrice })
        itemResource(res, 200, [], COMMON_SUCCESS)
    } catch {
        itemResource(res, 500, [], COMMON_ERRO)
    }
}
const delet = async (req, res) => {
    const { _id } = req.body
    try {
        item.findByIdAndDelete(_id)
    } catch {
        return
    }
}
export { index, create, get, update, delet }