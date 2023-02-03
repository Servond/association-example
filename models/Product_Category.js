module.exports = (sequelize, DataTypes) => {
    const Product_Category = sequelize.define("Product_Category", {
        productId: {
            type: DataTypes.INTEGER
        },
        categoryId: {
            type: DataTypes.INTEGER
        }
    }, {},
    );

    return Product_Category;
}