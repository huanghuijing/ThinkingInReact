const Data = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];
const search = document.querySelector('.search')
const checkbox = document.querySelector('.stock')
const content = document.querySelector('.content')


const render = (Data) => {
    content.innerHTML = '';
    // const category = [...new Set(Data.map((value) => value.category))]
    const allCategory = Data.map((value) => value.category)
    const mySet = new Set(allCategory);
    const category = [...mySet]

    for (let i = 0; i < category.length; i++) {
        const ul = document.createElement('ul');
        const categoryRow = document.createElement('div');
        categoryRow.classList.add('CategoryRow');
        categoryRow.textContent = category[i];
        ul.appendChild(categoryRow)
        const list = Data.filter(value => value.category === category[i])
        for (let j = 0; j < list.length; j++) {
            const li = document.createElement('li');
            li.innerHTML = `<span>${list[j].name}</span><span>${list[j].price}</span>`
            ul.appendChild(li);
        }
        content.appendChild(ul);
    }
}
render(Data);

const searchChangeHandle = (e) => {

    const searchData = checkbox.checked
        ? Data.filter(value =>
            value.name.toLowerCase().includes(e.target.value) && value.stocked)
        : Data.filter(value =>
            value.name.toLowerCase().includes(e.target.value));
    render(searchData);
}

search.addEventListener('keyup', searchChangeHandle);

const checkboxChangeHandle = () => {
    const searchData = checkbox.checked
        ? Data.filter(value =>
            value.name.toLowerCase().includes(search.value) && value.stocked)
        : Data.filter(value =>
            value.name.toLowerCase().includes(search.value));
    render(searchData);
}
checkbox.addEventListener('change', checkboxChangeHandle)

// 