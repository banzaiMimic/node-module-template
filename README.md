# node-module-template
node module template using webpack

### build
```
yarn
yarn build
```

### test
```
yarn test
```

### excluding dependencies
if dependencies are causing conflicts / duplications with child repos,
add the conflicting dependencies to `webpack.config.js externals`
```
externals: {
  fs: 'fs',
  winston: 'winston'  
}
```
