# node-module-template
node module template using webpack

### building
```
yarn
yarn build
```

### tests
```
yarn test
```

### excluding dependencies
add to `webpack.config.js externals`
```
externals: {
  fs: 'fs',
  winston: 'winston'  
}
```
