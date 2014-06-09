# Versity
Social learning

## Installation
````
npm i -g versity
versity build
versity start
````

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
In development requests are routed to `site.dev:PORT`, make sure to configure
your `etc/hosts` to match the configuration.

## API
Place a link to API docs here

## License

All rights reserved © [Yoshua Wuyts](yoshawuyts.com)