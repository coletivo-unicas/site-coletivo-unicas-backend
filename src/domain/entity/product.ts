class ProductEntity {
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

export {
    ProductEntity
}