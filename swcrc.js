module.exports = {
  jsc: {
    parser: {
      syntax: "typescript",
      tsx: true,
      decorators: true,
      dynamicImport: true,
    },
    transform: {
      legacyDecorator: true,
      decoratorMetadata: true,
    },
    target: "es2016",
    keepClassNames: true,
    loose: true,
  },
  module: {
    type: "es6",
  },
  sourceMaps: true,
};
