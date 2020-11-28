const db = require("../models");

const show = (req, res) => {
    db.user.findByPk(req.params.id).then((foundUser) => {
        if (!foundUser) return res.json({
            message: 'User with provided ID not found.'
        })
        res.json({ user: foundUser })
    })
        .catch(err => console.log("Error at user#index", err))
}

const update = (req, res) => {
    db.user.update(
        {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }, 
        {
            where: {
                id: req.params.id
            }
    }).then((updatedUser) => {
        console.log(updatedUser.data)
        res.json({ user: updatedUser })
    })
        .catch(err => console.log("Error at user#index", err))
}


const destroy = (req, res) => {
    db.user.destroy({
        where: { id: req.params.id }
    }).then(( deletedUser ) => {
        res.json({ message: `User with id ${req.params.id} has been deleted.` })
    })
        .catch(err => console.log("Error at User#index", err))
}

module.exports = {
    show,
    update,
    destroy
};