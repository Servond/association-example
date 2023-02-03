module.exports = (sequelize, DataTypes) => {
    const Cart_Product = sequelize.define("Cart_Product", {
        productId: {
            type: DataTypes.INTEGER
        },
        cartId: {
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER
        }
    }, {},
    );

    return Cart_Product;
}