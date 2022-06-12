const all = (req, res) => {
    res.send('all dashboard')
}

const user = (req, res) => {
    res.send('user dashboard')
}

const admin = (req, res) => {
    res.send('admin dashboard')
}

module.exports = {
    all,
    user,
    admin,
}