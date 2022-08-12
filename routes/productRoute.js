const router = require('express').Router();
const {
    getAllProducts,
    addProduct,
    deleteProduct,
    updateProduct,
    getProductById,
    getVariantById,
    getVariantByIdAndVariantId
} = require('../controllers/productController');

const isAuthorized = require('../middleware/isAuthorized');

router.get('/product', getAllProducts);
router.post('/product', isAuthorized, addProduct);
router.delete('/product/:id', isAuthorized, deleteProduct);
router.patch('/product/:id', isAuthorized, updateProduct);
router.get('/product/:id', getProductById);
router.get('/product/:id/variants', getVariantById);
router.get('/product/:id/variants/:variantId', getVariantByIdAndVariantId);


module.exports = router;




