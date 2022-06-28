var express = require('express')
var router = express.Router()
var { getAllRecipes } = require('../lib/contentful')

/* GET home page. */
router.get('/', async function (req, res, next) {
  const recipes = await getAllRecipes()
  res.render('index', { title: 'Vegetarian Cookbook', recipes: recipes })
})

module.exports = router
