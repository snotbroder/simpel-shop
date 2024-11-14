import React from "react";
import Image from "next/image";
import Tag from "@/components/Tag";

function CategoryCard({ backgroundImage, tagLabel }) {
  return (
    <div className="relative  w-64 h-40 rounded-lg overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-cover bg-center"></div>
      {tagLabel && (
        <div className="absolute top-2 z-20">
          <Tag tagLabel={tagLabel} />
        </div>
      )}
    </div>
  );
}

export default CategoryCard;
