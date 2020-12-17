module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  globals: {
    'vue-jest': {
      templateCompiler: {
        compilerOptions: {
          whitespace: 'condense',
        },
        transpileOptions: {
          transforms: {
            dangerousTaggedTemplateString: true,
          },
        },
      },
    },
  },
}
