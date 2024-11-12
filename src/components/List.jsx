import Card from "./Card";

function List() {
  return (
    <div className="flex flex-wrap gap-20 pl-28 pr-28 items-center justify-center">
      <Card productTitle="Sort Jakke" price="200" />
      <Card productTitle="Blå Jakke" price="300" />
      <Card productTitle="Rød Jakke" price="400 kr." />
      <Card productTitle="Gul Jakke" price="500 kr." />
      <Card productTitle="Sort Jakke" price="200 kr." />
      <Card productTitle="Blå Jakke" price="300" />
      <Card productTitle="Rød Jakke" price="400" />
      <Card productTitle="Gul Jakke" price="500" />
    </div>
  );
}

export default List;
