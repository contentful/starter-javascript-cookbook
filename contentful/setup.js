const spaceImport = require('contentful-import')
const exportFile = require('./export.json')
const path = require('path')
const { writeFileSync } = require('fs')

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_MANAGEMENT_TOKEN,
  CONTENTFUL_DELIVERY_TOKEN,
} = process.env

if (
  !CONTENTFUL_SPACE_ID ||
  !CONTENTFUL_MANAGEMENT_TOKEN ||
  !CONTENTFUL_DELIVERY_TOKEN
) {
  throw new Error(
    [
      'Parameters missing...',
      'Please run the setup command as follows',
      'CONTENTFUL_SPACE_ID=XXX CONTENTFUL_MANAGEMENT_TOKEN=CFPAT-XXX CONTENTFUL_DELIVERY_TOKEN=XXX npm run setup',
    ].join('\n')
  )
}

const fileContents =
  [
    `# All environment variables will be sourced`,
    `# and made available to .env`,
    `# Do NOT commit this file to source control`,
    `CONTENTFUL_SPACE_ID='${CONTENTFUL_SPACE_ID}'`,
    `CONTENTFUL_ACCESS_TOKEN='${CONTENTFUL_DELIVERY_TOKEN}'`,
  ].join('\n') + '\n'

spaceImport({
  spaceId: CONTENTFUL_SPACE_ID,
  managementToken: CONTENTFUL_MANAGEMENT_TOKEN,
  content: exportFile,
})
  .then(() => {
    console.log('The content model of your space is set up!')
    console.log('Writing config file....')
    writeFileSync(path.join(__dirname, '..', '.env'), fileContents, 'utf8')
    console.log('All set!')
  })
  .catch((e) => console.error(e))
