import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4567/api/graphql",
  documents: ["src/**/*.tsx", "src/**/*.ts"], // Updated to include .ts files
  generates: {
    "src/gql/": {
      preset: "client",
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
