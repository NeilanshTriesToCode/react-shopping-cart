// file containing reusable functions

const CATEGORIES_DATABASE_PATH = './Databases/categories.json';
const PRODUCTS_DATABASE_PATH = './Databases/products.json';

// function to get Categories info from hard-coded JSON database
export async function getCategories() {
  const data = await fetch(CATEGORIES_DATABASE_PATH).then(r => r.json());

  return data;
}
