import { productModel } from "../model/product.model.js";

 const create_Product = async (req,res) => {
    try {
        let obj = req.body;
        let product = new productModel(obj)
        await product.save()

        res.status(201).send("Product added successfully!!")
        
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }

} 

const getProduct = async (req,res) => {

    try {
        let {category} = req.params
        let product = await productModel.find({category})
        res.status(200).send({status: true, result : product})
    } catch (error) {
        res.status(400).send(error)
    }
}

export {
    create_Product,
    getProduct
}