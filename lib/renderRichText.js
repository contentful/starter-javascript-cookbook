var { documentToHtmlString } = require('@contentful/rich-text-html-renderer')
var { INLINES } = require('@contentful/rich-text-types')

const options = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node) =>
      `<span>${node.data.target.fields.name}</span>`,
  },
}

module.exports.renderRichText = (data) => {
  return documentToHtmlString(data, options)
}
