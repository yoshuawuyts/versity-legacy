# Versity
Social learning

## Installation
1. Git clone the repository
2. `npm link`

## Usage
````
  Usage: versity [options] [command]

  Commands:

    start                  start server
    build                  build assets

  Options:

    -h, --help               output usage information
    -p, --port <port>        specify the server port [1337]
    -t, --task <task>        specify the build task [default]
    -e, --environment <env>  specify the environment [development]
    -d, --debug <process>    enable debug mode on a process
````

## Development
Enable the following paths in your `hosts` file:
```
127.0.0.1 versity.dev
127.0.0.1 api.versity.dev
127.0.0.1 assets.versity.dev
```

Enable debug mode in the browser console:
```js
localStorage.debug = '*'
```

## License

All rights reserved © [Yoshua Wuyts](yoshawuyts.com)