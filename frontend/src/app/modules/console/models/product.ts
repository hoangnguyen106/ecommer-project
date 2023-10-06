export class Product {
  _id?: any;
  title?: String;
  slug?: String;
  description?: String;
  price?: number;
  category?: String;
  brand?: String;
  quantity?: number;
  sold?: number;
  images?: [
    {
      public_id: String;
      url: String;
    }
  ];
  color?: [];
  tags?: String;
  ratings?: [
    {
      star: number;
      comment: String;
    }
  ];
  totalrating?: {
    type: String;
    default: 0;
  };
}
