import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CategoryHeader from "../components/category/CategoryHeader";
import FilterSortBar from "../components/category/FilterSortBar";
import ProductGrid from "../components/category/ProductGrid";
import {
  categoryMeta,
  type ProductCategory,
} from "@/data/products";
import { useProductsByCategory, useProducts } from "@/hooks/useProducts";

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const key = (category ?? "") as ProductCategory;
  const meta = categoryMeta[key];

  // If there's a category, fetch by category. Otherwise fetch all.
  const { data: categoryProducts = [], isLoading: loadingCat } = useProductsByCategory(key);
  const { data: allProducts = [], isLoading: loadingAll } = useProducts();

  const items = meta ? categoryProducts : allProducts;
  const isLoading = meta ? loadingCat : loadingAll;

  const label = meta ? meta.label : "All Products";

  useEffect(() => {
    document.title = `${label} — Priyansu Store`;
  }, [label]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-6">
        {isLoading ? (
          <div className="flex items-center justify-center py-24">Loading...</div>
        ) : (
          <>
            <CategoryHeader category={label} description={meta?.description} />

            <FilterSortBar
              filtersOpen={filtersOpen}
              setFiltersOpen={setFiltersOpen}
              itemCount={items.length}
            />

            <ProductGrid items={items} />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Category;
