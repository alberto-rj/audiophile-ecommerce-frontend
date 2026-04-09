export interface ProductImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ProductInclude {
  quantity: number;
  item: string;
}

export interface ProductGallery {
  first: ProductImage;
  second: ProductImage;
  third: ProductImage;
}

export interface BasicProduct {
  slug: string;
  name: string;
  image: ProductImage;
}

export interface Product extends BasicProduct {
  id: number;
  category: string;
  categoryImage: ProductImage;
  isNew: boolean;
  price: number;
  description: string;
  features: string;
  includes: ProductInclude[];
  gallery: ProductGallery;
  others: BasicProduct[];
}
