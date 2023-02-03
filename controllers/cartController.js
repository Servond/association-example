const db = require("../models");
const Cart = db.Cart;

const CartController = {
    getById: async (req, res) => {
        try {
            const data = await Cart.findAll({
                where: { userId: req.params.id },
                include: [
                    {
                        model: db.Product,
                        include: [
                            {
                                model: db.Category
                            }
                        ]
                    }
                ]
            })
            return res.status(200).json({
                data,
                message: "Register success"
            })
        } catch (err) {
            console.log(err);
            return res.status(err.statusCode || 500).json({
                message: err.message
            })
        }
    }
}

module.exports = CartController;