// External dependencies
import { ObjectId } from 'mongodb';

// Class Implementation
export default class Product {
  constructor(
    public name: string,
    public price: number,
    public quantity: number,
    public image_url: string,
    public status: 'normal' | 'secret',
    public _id?: ObjectId
  ) {}
}

export const convertToObjectId = (id: string) => {
  // console.log(`converting id: ${id} to ObjectId`);
  return new ObjectId(id);
};
