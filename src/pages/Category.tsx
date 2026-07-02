import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CategoryHeader from "../components/category/CategoryHeader";
import FilterSortBar from "../components/category/FilterSortBar";
import ProductGrid from "../components/category/ProductGrid";
import {
  products,
  categoryMeta,
  type ProductCategory,
} from "@/data/products";

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const key = (category ?? "") as ProductCategory;
  const meta = categoryMeta[key];

  const items = useMemo(() => {
    if (meta) return products.filter((p) => p.category === key);
    return products;
  }, [key, meta]);

  const label = meta ? meta.label : "All Products";

  useEffect(() => {
    document.title = `${label} — Priyansu Store`;
  }, [label]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-6">
        <CategoryHeader category={label} description={meta?.description} />

        <FilterSortBar
          filtersOpen={filtersOpen}
          setFiltersOpen={setFiltersOpen}
          itemCount={items.length}
        />

        <ProductGrid items={items} />
      </main>

      <Footer />
    </div>
  );
};

export default Category;
