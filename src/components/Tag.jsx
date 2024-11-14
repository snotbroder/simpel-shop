function Tag({ tagLabel }) {
  return (
    <button className="bg-bg p-2 text-accent font-noto uppercase text-sm font-bold">
      {tagLabel}
    </button>
  );
}

export default Tag;
