import { Cart } from "../model/cart.model.js";
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

const getProductbyCategory = async (req,res) => {

    try {
        let {category} = req.params
        let {limit,offset} = req.query
        if(!limit){
            limit = 10
        }
        if(!offset){
            offset = 0
        }
        let product = await productModel.find({category}).skip(offset).limit(limit)
        res.status(200).send({status: true, result : product})
    } catch (error) {
        res.status(400).send({status:false, msg:error})
    }
}


const searchByProductName = async (req,res) => {
    try {
        const {productname, limit, offset} = req.query;
        const product = await productModel.find({title:{$regex:productname,$options:"i"}}).skip(offset).limit(limit);
        res.status(200).send({status: true, result : product});
    } catch (error) {
        res.status(400).send({status:false, msg:error});    
    }
}





const add_to_cart = async (req,res) => {
    try {
        const {user_id , product_id , quanitity} = req.query

        const cart_product = new Cart({user_id, product:product_id, quantity:+quanitity})
        await cart_product.save()
        res.status(201).send({status:true, msg:"Product added to cart successfully!!"})

    } catch (error) {
        res.status(400).send({status:false, msg:error})
    }
}


const add_to_wishlist = async (req,res) => {
    try {
        const {user_id, product_id} = req.query
        const wishlist_product = new Wishlist({user_id, product:product_id})
        await wishlist_product.save()
        res.status(201).send({status:true, msg:"Product added to wishlist successfully!!"})
    } catch (error) {
        res.status(400).send({status:false, msg:error})
    }
}





export {
    create_Product,
    getProductbyCategory,
    add_to_cart,
    searchByProductName,
    add_to_wishlist
}