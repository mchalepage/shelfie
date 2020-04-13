module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory().then(products => {
            res.status(200).send(products)
        }).catch(err => {
            console.log(err)
        })
    },
    addProduct: (req, res) => {
        const db = req.app.get('db')
        const {imgurl, name, price} = req.body

        db.create_product([imgurl, name, price]).then(data => {
            res.status(200).send(data)
        }).catch(err => {
            console.log(err)
        })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
    },
    updateProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {imgurl, name, price} = req.body

        db.update_product([id, imgurl, name, price]).then(() => {
            res.sendStatus(200)
        }).catch(err => res.status(500).send(err))
    }
}