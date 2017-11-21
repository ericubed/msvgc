module.exports = {
  import: {
    react: () => `import React from "react";`,
    reactOnTypescript: () => `import * as React from "react";`,
    reactOnCoffeescript: () => `React = require 'react'`,
    reactNaiveSvg: svgTags => `import Svg, { ${svgTags.join(', ')} } from "react-native-svg";`,
    reactNaiveSvgOnCoffeescript: svgTags => `Svg = require 'react-native-svg'
{ ${svgTags.join(', ')} } = Svg`
  },
  componentDeclaration: componentName => `\nconst ${componentName} = props => (`,
  componentDeclarationTypescript: componentName => `\nconst ${componentName} = (props: any) => (`,
  endOfDeclaration: () => `);`,
  exportingString: componentName => `\nexport default ${componentName};`,
  exportingStringOnTypescript: componentName => `\nexport = ${componentName}`,
  componentDeclarationOnCoffeescript: componentName => `\n${componentName} = (props) ->`,
  endOfDeclarationOnCoffeescript: () => ``,
  exportingStringOnCoffeescript: componentName => `\nmodule.exports = ${componentName}`,
  startImportString: () => `export {`,
  startImportStringTypescript: () => `export {`,
  componentsImportString: ({componentName}) => `import ${componentName} from './${componentName}'\n`,
  componentsImportStringOnCoffeescript: ({componentName}) => ``,
  componentsImportStringTypescript: ({componentName}) => `import ${componentName} from './${componentName}'\n`,
  componentsRequireString: ({componentName, componentPath}) => `\n  ${componentName}`,
  componentsRequireStringTypescript: ({componentName, componentPath}) => `\n  ${componentName}`,
  componentsRequireStringOnCoffeescript: ({componentName, componentPathOnCoffeescript}) => `\n  ${componentName}: require('${componentPathOnCoffeescript}')`,
  endImportString: () => `}`
}
