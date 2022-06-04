import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database"
import { memberModelSequelize } from "./member"

interface ProductInterface extends Model {
    ID: number
    title: string
    image1: string
    image2: string
    image3: string
    price: number
    category: string
    size: string
    available: boolean
    description: string
    memberID: number
    color: string
}

class ProductModel {
    public ID: number
    public title: string
    public image1: string
    public image2: string
    public image3: string
    public price: number
    public category: string
    public size: string
    public available: boolean
    public description: string
    public memberID: number
    public color: string

    constructor(ID: number, title: string, image1: string, image2: string, image3: string, price: number, category: string, size: string, available: boolean, description: string, memberID: number, color: string) {
        this.ID = ID
        this.title = title
        this.image1 = image1
        this.image2 = image2
        this.image3 = image3
        this.price = price
        this.category = category
        this.size = size
        this.available = available
        this.description = description
        this.memberID = memberID
        this.color = color
    }
}

const ProductModelSequelize = sequelize.define<ProductInterface>('products',
    {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            field: 'id_product',
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'title'
        },
        image1: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'image1'
        },
        image2: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'image2'
        },
        image3: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'image3'
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            field: 'price'
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'category'
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'size'
        },
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            field: 'available'
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'description'
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'color'
        },
        memberID: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'fk_member_id_member',
            references: {
                model: memberModelSequelize,
                key: 'id_member'
            }
        }
    },
    {
        schema: 'public',
        underscored: true,
        timestamps: false
    })

export {
    ProductModel,
    ProductModelSequelize
}