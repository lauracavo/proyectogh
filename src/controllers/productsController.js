const path = require("path");
const db = require('../../database/models/index')

const productsController = {
    getAll: async (req, res) => {
    // OBTENIENDO LOS DATOS DE LA BASE DE DATOS    
    try{
        let product = await db.Product.findAll()
    
      for(let item of product){
          
          const imgList = await db.ImageProduct.findOne({ where: {idProduct: item.idProduct}});
          product=[...product,{...item.dataValues, imgList: imgList.dataValues}]
      //     console.log(imgList.dataValues)
       }
      
       res.render("product", {product})
    } catch (error){
          res. send({ result: 'Error', payload: error });
    }
       
},   

    byId: async (req, res) => {
        const {id} = req.params
    try{
        let products = await db.Product.findAll();
    let productsWithImages = [];
        for (let item of products) {
            const imgList = await db.ImageProduct.findOne({ where: { idProduct: item.idProduct } });
        productsWithImages.products
push({ ...item.dataValues, imgList: imgList ? imgList.dataValues : null });
        }
        
        res.render("product", { products: productsWithImages });
    
       } catch (error) {
        res.send({ result: 'Error', payload: error });
    }
    },
 }

module.exports = productsController;
