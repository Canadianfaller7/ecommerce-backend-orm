const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
 try {
  const categoryData = await Category.findAll({
    include: [
      {
        model: Product,
      },
    ],
  });
  res.status(200).json(categoryData);
 } catch (err) {
    res.status(500).json(err);
 }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product
        },
      ],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create new category
  try {
    const newCategory = await Category.create({
      ...req.body,  
    });
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update/edit category by id
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      },
    });
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete category by id
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      },
    })
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
