const Express = require("express");
let validateJWT = require("../middleware/validate-jwt");
const router = Express.Router();
const { CollectionModel } = require("../models");

router.get('/practice', validateJWT, (req, res) => {
    res.send('Hey!! This is a practice route')
});

/*=====Collection Create=====*/
router.post("/create", validateJWT, async (req, res) => {
    const { item, description, category, imageFile, quantity, currentlyListed, 
    listingId, year, manufacturer, quality, estimatedValue, listPrice } = req.body.collection;
    const { id } = req.user;
    const collectionEntry = {
        item,
        description,
        category,
        imageFile,
        quantity,
        currentlyListed,
        listingId,
        year,
        manufacturer,
        quality,
        estimatedValue,
        listPrice,
        adminId: id
    }
    try {
        const newCollection = await CollectionModel.create(collectionEntry);
        res.status(200).json(newCollection);
    } catch (err) {
        res.status(500).json({ error: err });
    }
})

/*=====Collection Create=====*/

module.exports = router;