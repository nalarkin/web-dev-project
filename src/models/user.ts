// External dependencies
import { ObjectId } from 'mongodb';

// Class Implementation
export default class User {
  constructor(
    public username: string,
    public password: number,
    public first_name: number,
    public last_name: string,
    public _id?: ObjectId
  ) {}
}
