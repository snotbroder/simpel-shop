"use client";
import { useRouter } from "next/navigation";
import CategoryCard from "@/components/CategoryCard";

function PopCategories() {
  const router = useRouter();

  const handleCategoryClick = (category) => {
    router.push(`/products/?category=${category}`); // Navigate to the product page with the category in the query
  };

  return (
    <div className="pb-40 pt-32 items-center md:items-start md:ml-20 flex flex-col">
      <h2 className="font-poppins text-2xl font-semibold text-primary">
        Popular categories
      </h2>
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        <CategoryCard
          backgroundImage="/perfume.jpg"
          tagLabel="Fragrances"
          onClick={() => handleCategoryClick("fragrances")} // Pass the category
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
