var express = require('express')
var router = express.Router()
var { renderRichText } = require('../lib/renderRichText')
var { getRecipe } = require('../lib/contentful')

/* GET home page. */
router.get('/:slug', async function (req, res, next) {
  const slug = req.params.slug
  const recipe = await getRecipe(slug)
  if (recipe[0].fields) {
    const altText = recipe[0].fields.images[0].fields.description
    const image = recipe[0].fields.images[0].fields.file.url
    const ingredients = renderRichText(recipe[0].fields.ingredients)
    const instructions = renderRichText(recipe[0].fields.instructions)
    res.render('recipe', {
      title: recipe[0].fields.title + ' - Vegetarian Cookbook',
      recipe: recipe[0],
      ingredients: ingredients,
      instructions: instructions,
      altText: altText,
      image: image,
    })
  }
})

module.exports = router
