import Tag from "@/components/Tag";

function CategoryCard({ backgroundImage, tagLabel, onClick }) {
  return (
    <div
      className="relative w-64 h-40 rounded-lg overflow-hidden shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      {tagLabel && (
        <div className="absolute top-2 z-20">
          <Tag tagLabel={tagLabel} />
        </div>
      )}
    </div>
  );
}

export default CategoryCard;
