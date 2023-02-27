// import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { render, router } from "./lib";

import projects from "./pages/admin/products";
import productsAdd from "./pages/admin/product-add";
import productsEdit from "./pages/admin/product-edit";


const app = document.querySelector("#app");

router.on('/products', () => render(projects, app));
router.on('/add', () => render(productsAdd, app));
router.on('/products/:id/edit', ({ data }) => render(() => productsEdit(data), app));

router.resolve();