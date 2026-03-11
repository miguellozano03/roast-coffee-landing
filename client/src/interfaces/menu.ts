
type MenuCategory = 'coffee' | 'cold-drinks' | 'tea' | 'bakery';

export interface MenuItemDTO {
  id: number;
  title: string;
  category: MenuCategory;
  content: string;
  price: 4.5;
  imgUrl: string;
}