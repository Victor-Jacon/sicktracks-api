module.exports = (req, res) => {
    if (req.method === 'GET') {
        res.json([
            {name: 'James', location: 'North Carolina'},
            {name: 'George', location: 'New Jersey'}
        ])
    } else {
        const { name, location } = req.body;
        res.send({ status: "User Created", name, location });
    }
}