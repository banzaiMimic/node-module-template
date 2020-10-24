# node-module-template
node module template using webpack

### excluding dependencies
add to `webpack.config.js externals`
```
externals: {
  fs: 'fs',
  winston: 'winston'  
}
```
