import { injectable } from 'tsyringe';

import { Database } from './database';

@injectable()
export class MyService {
  constructor(private database: Database) {}

  get() {
    return this.database.doQuery();
  }
}
