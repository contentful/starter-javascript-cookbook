const { createClient } = require('contentful')

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

module.exports.getAllRecipes = () => {
  return client
    .getEntries({ content_type: 'recipe' })
    .then((entries) => entries.items)
}

module.exports.getRecipe = (slug) => {
  return client
    .getEntries({ content_type: 'recipe', 'fields.slug': slug })
    .then((entries) => entries.items)
}
