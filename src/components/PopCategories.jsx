import CategoryCard from "@/components/CategoryCard";

function PopCategories() {
  return (
    <div className="pb-40 pt-32  items-center md:items-start md:ml-20 flex flex-col">
      <h2 className="font-poppins  text-2xl font-semibold text-primary">
        Popular categories
      </h2>
      <div className="flex flex-wrap gap-4 mt-4 justify-center"></div>
    </div>
  );
}
export default PopCategories;
