const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const allCats = await Category.findAll({
    include: [Product]
  })
  res.json(allCats);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const oneCat = await Category.findByPk(req.params.id, {
    include: [Product]
  })
  res.json(oneCat);
});

router.post('/', async (req, res) => {
  // create a new category
  const newCat = await Category.create(req.body);
  res.json(newCat);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const updatedCat = await Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.json(updatedCat);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const deletedCat = await Category.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json(deletedCat);
});

module.exports = router;
