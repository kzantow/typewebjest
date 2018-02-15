# type(script)web(pack)jest helpers

There's documentation that has you creating a bunch of files. Here are files you can use without polluting your pristine project.

Usage, in your jest config:

```
...
    setupFiles: ['<rootDir>/.jest/setupPolyfills.js'],
...
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'typewebjest/transforms/ts',
        '^.+\\.css$': 'typewebjest/transforms/css',
        '^(?!.*\\.(js|jsx|mjs|css|json)$)': 'typewebjest/transforms/file'
    },
...
```

