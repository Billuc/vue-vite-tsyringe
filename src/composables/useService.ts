import { DependencyContainer, InjectionToken } from 'tsyringe';
import { inject } from 'vue';

export const useService = <T>(token: InjectionToken<T>): T => {
  // This returns the container provided in the plugin
  const myContainer: DependencyContainer | undefined = inject("container");

  if (!myContainer)
    throw Error(
      "DependencyContainer not available ! Are you using the DI plugin ?"
    );

  return myContainer.resolve(token);
};
