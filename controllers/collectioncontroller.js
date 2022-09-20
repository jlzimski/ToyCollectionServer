const Express = require("express");
let validateJWT = require("../middleware/validate-jwt");
const router = Express.Router();
const { CollectionModel } = require("../models");

router.get('/practice', validateJWT, (req, res) => {
    res.send('Hey!! This is a practice route')
});

/*=====Collection Create=====*/
router.post("/create", validateJWT, async (req, res) => {
    const { item, description, category, image, quantity, currentlyListed, 
    listingId, year, manufacturer, quality, estimatedValue, listPrice } = req.body.collection;
    const { id } = req.user;
    const collectionEntry = {
        item,
        description,
        category,
        image,
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
});
/*=====Collection Get All=====*/
router.get("/", async (req, res) => {
    try {
        const toy = await CollectionModel.findAll();
        res.status(200).json(toy);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

/*=====Collection Get by Category=====*/
router.get("/:category", async (req, res) => {
    const { category } = req.params;
    try {
        const results = await CollectionModel.findAll({
            where: { category: category }
        });
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});
/*=====Collection Delete Item=====*/
router.delete("/delete/:id", validateJWT, async (req, res) => {
    const adminUser = req.user.isAdmin;
    const toyId = req.params.id;

    try {
        const query = {
            where: {
                id: toyId,
                adminUser: true
            }
        };
        await CollectionModel.destroy(query);
        res.status(200).json({ message: "Item removed" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = router;