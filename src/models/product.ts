// External dependencies
import { ObjectId } from 'mongodb';

// Class Implementation
export default class Product {
  constructor(
    public name: string,
    public price: number,
    public quantity: number,
    public image_url: string,
    public id?: ObjectId
  ) {}
}
