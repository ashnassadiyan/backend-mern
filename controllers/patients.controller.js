import patient from '../models/Patients.js'
import { ITEMS_NOT_FOUND, COMMON_ERRO, COMMON_SUCCESS, COMMON_FOUND } from '../helpers/messages.js'
import patientResource from '../resources/items/patients.resource.js'

const create = async (req, res) => {
    const { name, age, dob, address } = req.body

    try {
        const response = await patient.create({
            name,
            age,
            dob,
            address
        })
        patientResource(res, 200, [], COMMON_SUCCESS)
    } catch (err) {
        console.log(err)
        patientResource(res, 500, [], err)
    }
}
const update = async (req, res) => {
    const { name, age, dob, address } = req.body

    try {
        const response = await patient.create({
            name,
            age,
            dob,
            address
        })
        patientResource(res, 200, [], COMMON_SUCCESS)
    } catch (err) {
        console.log(err)
        patientResource(res, 500, [], err)
    }
}
const get = async (req, res) => {
    const { name, age, dob, address } = req.body

    try {
        const response = await patient.create({
            name,
            age,
            dob,
            address
        })
        patientResource(res, 200, [], COMMON_SUCCESS)
    } catch (err) {
        console.log(err)
        patientResource(res, 500, [], err)
    }
}
const index = async (req, res) => {
    try {
        patient.find((err, data) => {
            data ?
                patientResource(res, 200, data, COMMON_FOUND)
                :
                patientResource(res, 200, data, ITEMS_NOT_FOUND)
        })
    } catch (err) {
        console.log(err)
        patientResource(res, 500, [], err)
    }
}
const dele = async (req, res) => {
    const { name, age, dob, address } = req.body

    try {
        const response = await patient.create({
            name,
            age,
            dob,
            address
        })
        patientResource(res, 200, [], COMMON_SUCCESS)
    } catch (err) {
        console.log(err)
        patientResource(res, 500, [], err)
    }
}

export { create, update, get, index, dele }