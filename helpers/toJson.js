const toJson = (res, stat, dat, mess) => {
    let message = {
        status: stat,
        data: dat,
        message: mess
    }
    message.data
    return res.send(message)
}

export default toJson