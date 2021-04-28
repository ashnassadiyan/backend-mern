import { ITEMS_FOUND } from '../../helpers/messages.js'
const itemResource = (res, status, data, mess) => {
    res.status(status)
    return res.send({
        status,
        data,
        message: mess || ITEMS_FOUND
    })

}

export default itemResource