import { useEffect, router, useState } from "../../lib"
import { string, object, number } from "yup"
import { getProduct, updateProducts } from "../../api/products";

const projectSchema = object({
    name: string().required("Ten khong duoc de trong "),
    price: number().required("Gia phai la so ")
})


const productsEdit = ({ id }) => {
    const [products, setProducts] = useState({});

    useEffect(() => {
        (() => {
            try {
                getProduct(id).then(({ data }) => setProducts(data));
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])

    useEffect(() => {
        const form = document.getElementById('form-add');
        const productName = document.getElementById('product-name');
        const productImage = document.getElementById('product-image');
        const productPrice = document.getElementById('product-price');
        const productQuality = document.getElementById('product-quality');
        const productDes = document.getElementById('product-description');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = {
                name: productName.value,
                image: productImage.value,
                price: productPrice.value,
                quality: productQuality.value,
                desctiption: productDes.value
            };

            projectSchema
                .validate(formData, { abortEarly: false })
                .then(() => {
                    window.confirm("Cap nhat thanh cong");
                    updateProducts(formData).then(() => router.navigate("/products"));
                })
                .catch((error) => {
                    const formErrorEl = document.querySelectorAll(".form-error");
                    formErrorEl.forEach((element, index) => {
                        element.innerHTML = error.errors[index];
                    })
                })
        })
    })


    return /*html*/`
    <div class="container ">
    <h1>Cap nhat san pham </h1>
    <form action="" id="form-add" class="form-group">
    <div class="form-group">
        <label for="">Ten san pham</label>
        <input type="text" id="product-name" class="form-control" value="${products.name}" >
        <div class="form-error text-danger"> </div>
    </div>
    <div class="form-group">
        <label for="">Anh</label>
        <input type="file" id="product-image" class="form-control">
    </div>
    <div class="form-group">
        <label for="">Gia</label>
        <input type="text" id="product-price" class="form-control">
        <div class="form-error text-danger"> </div>
    </div>
    <div class="form-group">
        <label for="">Danh gia</label>
        <input type="text" id="product-quality" class="form-control">
       
    </div>
    <div class="form-group">
        <label for="">Mota</label>
        <input type="text" id="product-description"class="form-control">
       
    </div>
    <div>
        <button class="btn btn-primary">cap nhat san pham</button>
    </div>


</form>
 
    </div>
  `
}

export default productsEdit