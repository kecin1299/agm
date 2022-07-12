class Product{

    constructor(name, price, category){
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class UI{

    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class"card-body">
                    <strong>Producto</strong>: ${product.name}
                    <strong>Precio</strong>: ${product.price}
                    <strong>Categoría</strong>: ${product.category}
                    <a href="#" class="btn btn-outline-danger btn-sm" name="delete">Eliminar</a>
                </div>

            
            </div>
        `;

        productList.appendChild(element);
    }

    resetForm(){

        document.getElementById('product-form').reset();

    }
    deleteProduct(element){
        if(element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
        }

    }
    showMessage(){


    }
}

document.getElementById('product-form')
.addEventListener('submit', function(e){
   const name = document.getElementById('name').value;
   const price = document.getElementById('price').value;
   const category= document.getElementById('category').value;

   const product = new Product(name, price, category);


   const ui = new UI();

   ui.addProduct(product);

   ui.resetForm();
   e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e){

    const ui = new UI();
    ui.deleteProduct(e.target);
    

})