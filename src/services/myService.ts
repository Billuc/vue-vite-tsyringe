import { injectable, InjectionToken, inject } from "tsyringe";
import { Database } from "./database";

@injectable()
export class MyService {
  constructor(@inject(Database) private database: Database) { }

  get() {
    return this.database.doQuery();
  }
}
