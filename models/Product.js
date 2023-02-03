module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        name: {
            type: DataTypes.STRING
        },
        stock: {
            type: DataTypes.INTEGER
        }
    }, {},
    );

    return Product;
}