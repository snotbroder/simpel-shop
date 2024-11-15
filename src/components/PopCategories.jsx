"use client";
import { useRouter } from "next/navigation";
import CategoryCard from "@/components/CategoryCard";

function PopCategories() {
  const router = useRouter();

  const handleCategoryClick = (category) => {
    router.push(`/products/?category=${category}`); // Navigate to the product page with the category in the query
  };

  return (
    <div className="lg:p-24 lg:-mx-20 md:pl-20 py-8 -mx-4 md:items-start justify-center flex flex-col bg-accent2">
      <h2 className="font-poppins text-2xl text-center font-semibold text-primary">
        Popular categories
      </h2>
      <div className="flex flex-wrap gap-6 mt-4 justify-center md:justify-start ">
        <CategoryCard
          backgroundImage="/perfume.jpg"
          tagLabel="Fragrances"
          onClick={() => handleCategoryClick("fragrances")}
        />
        <CategoryCard
          backgroundImage="/beauty.jpg"
          tagLabel="Beauty"
          onClick={() => handleCategoryClick("beauty")}
        />
        <CategoryCard
          backgroundImage="/groceries.jpg"
          tagLabel="Groceries"
          onClick={() => handleCategoryClick("groceries")}
        />
        <CategoryCard
          backgroundImage="/furniture.jpg"
          tagLabel="Furniture"
          onClick={() => handleCategoryClick("furniture")}
        />
      </div>
    </div>
  );
}

export default PopCategories;
