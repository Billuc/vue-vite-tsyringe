import { container } from 'tsyringe';
import { Plugin } from 'vue';

import { Database } from '../services/database';
import { MyService } from '../services/myService';

const containerPlugin: Plugin = (app) => {
  // This not necessary, container is already the default container provided by tsyringe and can be used directly
  const myContainer = container.createChildContainer();

  // Register services here
  // Example
  // myContainer.registerSingleton(Database);
  myContainer.registerSingleton(Database);
  myContainer.registerSingleton(MyService);

  // That allows us to get an easy access to our container in the components
  app.provide("container", myContainer);
  return app;
};
export default containerPlugin;
