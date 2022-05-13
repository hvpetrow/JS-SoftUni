function solve() {
      document.getElementsByClassName('shopping-cart')[0].addEventListener('click',addProducts);
      document.getElementsByClassName('checkout')[0].addEventListener('click',checkout);

      let cart = [];
      let output = document.getElementsByTagName('textarea')[0];
      output.value='';

  function addProducts (ev){
      if (ev.target.tagName=='BUTTON' && ev.target.classList.contains('add-product')){
            const product = ev.target.parentNode.parentNode;
            const productName = product.querySelector('.product-title').textContent;
            const price = Number(product.querySelector('.product-line-price').textContent);

            cart.push({
               productName,
               price
            });

            output.value += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`;
      }
   }

   function checkout() {
      const products = new Set();
      cart.forEach(p=> products.add(p.productName));
      const total = cart.reduce((a,b)=> a + b.price,0);
      output.value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.`
   }
}