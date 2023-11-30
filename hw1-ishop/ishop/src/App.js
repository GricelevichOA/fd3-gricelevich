import "./App.css";

const SHOP_ITEMS = [
  {
    name: "item 1",
    price: "43",
    photoUrl: "http://via.placeholder.com/320x240",
    itemsLeft: 16,
  },
  {
    name: "item 2",
    price: "23",
    photoUrl: "http://via.placeholder.com/320x240",
    itemsLeft: 33,
  },
  {
    name: "random item",
    price: "54",
    photoUrl: "http://via.placeholder.com/320x240",
    itemsLeft: 17,
  },
  {
    name: "another item",
    price: "34",
    photoUrl: "http://via.placeholder.com/320x240",
    itemsLeft: 2,
  },
  {
    name: "something",
    price: "65",
    photoUrl: "http://via.placeholder.com/320x240",
    itemsLeft: 0,
  },
];

function App() {
  return (
    <div>
      <h1>Items Shop (Now with Pull Request)</h1>
      <ShopItems items={SHOP_ITEMS} />
    </div>
  );
}

function ShopItems({ items }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Photo</th>
            <th>Items Left</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.price}$</td>
                <td>
                  <img src={item.photoUrl} alt={item.name}></img>
                </td>
                <td>{item.itemsLeft}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
