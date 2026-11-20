import { products } from "@/lib/products";
import { LibraryExperience } from "@/components/library-experience";

export default function HomePage() {
  const featured = products.filter((product) => product.featured).slice(0, 3);
  return <LibraryExperience books={featured} />;
}
