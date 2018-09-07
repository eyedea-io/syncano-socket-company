import fs from 'fs'
import YAML from 'yaml'
import jsf from 'json-schema-faker'

const jsfDefaultOptions = {
  defaultInvalidTypeProduct: 'string',
  failOnInvalidTypes: false,
  optionalsProbability: 0.8
}

jsf.option(jsfDefaultOptions)

function readSchema(endpoint) {
  const definition = YAML.parse(fs.readFileSync('socket.yml').toString(), 'utf-8')
  return definition.endpoints[endpoint].inputs
}

function getFakeData(endpoint, options) {
  jsf.option(options)
  return jsf.resolve(readSchema(endpoint))
}

export {getFakeData}
