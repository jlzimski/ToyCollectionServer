const { DataTypes } = require("sequelize");
const db = require("../db");

const Collection = db.define("collection", {
    item: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    category: {
        type: DataTypes.ENUM,
        values: ['----', 'Baseball', 'Basketball', 'Football', 'Hockey', 'Wrestling']
    },
    image: {
        type: DataTypes.STRING
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 1
    },
    currentlyListed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false
    },
    listingId: {
        type: DataTypes.STRING
    },
    year: {
        type: DataTypes.INTEGER
    },
    manufacturer: {
        type: DataTypes.STRING
    },
    quality: {
        type: DataTypes.ENUM,
        values: ['----', 'poor', 'fair', 'good', 'excellent', 'mint', 'some damage to packaging', 'gently used', 'like new']
    },
    estimatedValue: {
        type: DataTypes.STRING
    },
    listPrice: {
        type: DataTypes.STRING
    },
    adminId: {
        type: DataTypes.INTEGER
    }
});

module.exports = Collection;