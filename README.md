### Simple Localization

A walkthrough of simple i18n localization using the [angular-localization](https://github.com/doshprompt/angular-localization) library.

In order to run this example, we recommend installing a simple http server like [httpster](http://simbco.github.io/httpster/) or [node-static](https://github.com/cloudhead/node-static).
Go ahead and run the server from the root directory of the project. The index page will automatically load with the correct scripts pulled in. Dependencies are managed by bower.

```BASH
    cd ROOT_OF_THIS_PROJECT
    bower install
    httpster
```

This will run a server (by default) at localhost:3333. Contrarily with node-static:

```BASH
    cd ROOT_OF_THIS_PROJECT
    bower install
    static
```

This will run a server (by default) at localhost:8080.


For more information on supported locales, check out [http://msdn.microsoft.com/en-us/library/ee825488(v=cs.20).aspx](http://msdn.microsoft.com/en-us/library/ee825488(v=cs.20).aspx)