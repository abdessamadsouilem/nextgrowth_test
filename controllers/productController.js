const Product = require("../models/productModel.js");


module.exports = {
    // get all products
    getAllProducts: async (req, res) => {
        const products = await Product.find().then
            (products => {
                res.json(products);
            }
            ).catch(err => {
                res.json(err);
            }
            );
    },
    // add a product
    addProduct: async (req, res) => {
        const product = new Product({
            reference: req.body.reference,
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            variants: req.body.variants
        });
        await product.save().then(() => {
            res.status(200).json({
                message: 'Product added successfully'
            });
        }
        ).catch(err => {
            res.status(500).json({
                error: "Error adding product",
                errorMessage: err
            });
        }
        );
    },
    // delete a product
    deleteProduct: async (req, res) => {
        await Product.findByIdAndDelete(req.params.id).then(() => {
            res.status(200).json({
                message: 'Product deleted successfully'
            });
        }
        ).catch(err => {
            res.status(500).json({
                error: "Error deleting product"
            });
        }
        );
    },
    // update a product
    updateProduct: async (req, res) => {
        await Product.findByIdAndUpdate(req.params.id, req.body).then(() => {
            res.status(200).json({
                message: 'Product updated successfully'
            });
        }
        ).catch(err => {
            res.status(500).json({
                error: "Error updating product"
            });
        }
        );
    },
    // get a product by id
    getProductById: async (req, res) => {
        await Product.findById(req.params.id).then(product => {
            res.status(200).json(product);
        }
        ).catch(err => {
            res.status(500).json({
                error: "Error getting product"
            });
        }
        );
    },
    // get a variant by product id
    getVariantById: async (req, res) => {
        await Product.findById(req.params.id).then(product => {
            res.status(200).json(product.variants);
        }
        ).catch(err => {
            res.status(500).json({
                error: "Error getting variant"
            });
        }
        );
    },
    // get a variant by product id and variant id
    getVariantByIdAndVariantId: async (req, res) => {
        await Product.findById(req.params.id).then(product => {
            res.status(200).json(product.variants.find(variant => variant.sku === req.params.variantId));
        }
        ).catch(err => {
            res.status(500).json({
                error: "Error getting variant"
            });
        }
        );
    }
}
