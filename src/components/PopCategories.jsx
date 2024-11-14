import CategoryCard from "@/components/CategoryCard";

function PopCategories() {
  return (
    <div className="pb-40 pt-32  items-center md:items-start md:ml-20 flex flex-col">
      <h2 className="font-poppins  text-2xl font-semibold text-primary">
        Popular categories
      </h2>
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        <CategoryCard backgroundImage="/perfume.jpg" tagLabel="Fragnances" />
        <CategoryCard backgroundImage="/beauty.jpg" tagLabel="Beauty" />
        <CategoryCard backgroundImage="/groceries.jpg" tagLabel="Groceries" />
        <CategoryCard backgroundImage="/furniture.jpg" tagLabel="Furniture" />
      </div>
    </div>
  );
}
export default PopCategories;
