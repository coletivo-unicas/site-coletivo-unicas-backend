"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModelSequelize = exports.ProductModel = void 0;
var sequelize_1 = require("sequelize");
var database_1 = require("../database");
var member_1 = require("./member");
var ProductModel = /** @class */ (function () {
    function ProductModel(ID, title, image1, image2, image3, price, category, size, available, description, memberID, color) {
        this.ID = ID;
        this.title = title;
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.price = price;
        this.category = category;
        this.size = size;
        this.available = available;
        this.description = description;
        this.memberID = memberID;
        this.color = color;
    }
    return ProductModel;
}());
exports.ProductModel = ProductModel;
var ProductModelSequelize = database_1.sequelize.define('products', {
    ID: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        field: 'id_product',
        primaryKey: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'title'
    },
    image1: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'image1'
    },
    image2: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'image2'
    },
    image3: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'image3'
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
        field: 'price'
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'category'
    },
    size: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'size'
    },
    available: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        field: 'available'
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'description'
    },
    color: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'color'
    },
    memberID: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'fk_member_id_member',
        references: {
            model: member_1.memberModelSequelize,
            key: 'id_member'
        }
    }
}, {
    schema: 'public',
    underscored: true,
    timestamps: false
});
exports.ProductModelSequelize = ProductModelSequelize;
