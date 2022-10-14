const data = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];



function App() {

  function FilterableProductTable({ data }) {
    return (
      <div>
        <SearchBar />
        <ProductTable data={data} />
      </div>
    )
  }

  function SearchBar() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <label>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </label>
      </form>
    )
  }

  function ProductTable({ data }) {
    const newList = [];
    let lastCategory = null;

    data.forEach((value, index) => {
      if (lastCategory !== value.category) {
        newList.push(<ProductCategoryRow category={value.category} key={index} />);
      }
      newList.push(<ProductRow name={value.name} price={value.price} stocked={value.stocked} key={value.name} />)
      lastCategory = value.category;
    })
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {newList}
        </tbody>
      </table>
    )
  }

  function ProductCategoryRow({ category }) {
    return (
      <tr>
        <td colSpan='2'>
          {category}
        </td>
      </tr>
    );
  }

  function ProductRow({ name, price, stocked }) {
    const pname = stocked ? name :
      <span style={{ color: 'red' }}>
        {name}
      </span>;

    return (
      <tr>
        <td>
          {pname}
        </td>
        <td>
          {price}
        </td>
      </tr>
    )
  }

  return (
    <div className="App">
      <FilterableProductTable data={data} />
    </div>
  );
}


export default App;
