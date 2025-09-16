# Vue 3 + Vite + Tsyringe

> _UPDATE_: I managed to make it work ! However, you have to explicitely inject every dependency for each service, which is quite cumbersome. Even though it seems development has resumed on tsyringe, I still recommend not using it :/

> _IMPORTANT:_ this does not work, I managed to make tsyringe work in another project, but it doesn't in this one and the reason why is not trivial. Since the last release of tsyringe dates to 2020, I recommend using another library such as [InversifyJS](https://github.com/inversify/InversifyJS) !

This project is an attempt to demonstrate how to setup a simple Vue3 + Vite project and add Tsyringe as a Dependency Injection library.
