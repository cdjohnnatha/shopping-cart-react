// relay.config.js
module.exports = {
  src: "./src",
  schema: "./src/graphql/schema.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
}