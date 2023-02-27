import axios from "axios"
import { deleteProducts } from "../../api/products";
import { useEffect, useState } from "../../lib"

const projects = () => {
    //get data
    const [products, setproducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/products").then(({ data }) => setproducts(data));
    }, []);

    //Xóa
    useEffect(() => {
        const btns = document.querySelectorAll('.btn-remove');
        for (let btn of btns) {
            btn.addEventListener("click", async function () {
                const id = this.dataset.id;
                const confirm = window.confirm("Ban chac chan muon xoa khong ?")
                if (confirm) {
                    try {
                        await deleteProducts(id);
                        const newProducts = products.filter((product) => product.id !== +id);
                        setproducts(newProducts);
                    } catch (error) {
                        console.log(error);
                    }
                }
            })
        }
    })

    return `
  
  <div>
  <table class="table table-border table-info">
      <thead>
          <th>STT</th>
          <th>Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Quality</th>
          <th>Description</th>
          <th>Action</th>
      </thead>
      ${products.map((product, index) =>
        `
        <tbody>
        <tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td><img src="${product.image}" width="200px"> </td>
            <td>${product.price}</td>
            <td>${product.quality}</td>
            <td>${product.description}</td>
            <td>
                <button data-id="${product.id}" class="btn btn-danger btn-remove">Delete</button>
                <button class="btn btn-warning"><a href="/products/${product.id}/edit"
                        style="color: white;">Edit</a></button>
            </td>
        </tr>
        `
    ).join("")}
    
      </tbody >
  </table >
  <div>
  <a href="/add"><button class="btn btn-primary"> Them san pham </button></a>
</div>
</div >
    `
}

export default projects;