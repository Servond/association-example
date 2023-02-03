module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
        userId: {
            type: DataTypes.INTEGER
        },
    }, {},
    );

    return Cart;
}