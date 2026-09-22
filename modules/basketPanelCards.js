function renderBasket({userOrder, baskPanelcount}) {
  let basketPanelTotalPrice = document.querySelector('.basket_totalPrice')
let basketPanelListCards = document.querySelector('.basket_panel_list_center')


    basketPanelListCards.innerHTML = ''
    userOrder.forEach((item)=>{
 const orderCard = document.createElement('div');
  orderCard.classList.add('basket_panel_list_center_order')
orderCard.innerHTML =`
<div class="basket_panel_list_center_order_left">
      <div class="basket_panel_list_center_order_img">
            <img src=${item.img} alt="order img">
  </div>
      <div class="basket_panel_list_center_order_info">
<h2 class="basket_panel_list_center_order_title">${item.name}</h2>
<p class="basket_panel_list_center_order_gram">${item.gram}г</p>
<p class="basket_panel_list_center_order_price">${item.price}₽</p>
      </div>
      </div>
<div class="basket_panel_list_center_order_right">
          <div class="add_panel_main_down_amount_panel">
   <button type="button" class="basket_panel_list_amount_minus">-</button>
<p class="basket_panel_list_amount">${item.amount}</p>
   <button type="button" class="basket_panel_list_amount_plus">+</button>
</div>
</div>
`


    orderCard.querySelector('.basket_panel_list_amount_plus').addEventListener('click', () => {
      item.amount++;
            renderBasket({ userOrder, baskPanelcount });
      });


      orderCard.querySelector('.basket_panel_list_amount_minus').addEventListener('click', () => {
      item.amount--;
      if (item.amount <= 0) {
        userOrder.splice(userOrder.indexOf(item), 1);
          }
             renderBasket({ userOrder, baskPanelcount });
   });


basketPanelListCards.appendChild(orderCard)
    })
    baskPanelcount.textContent = userOrder.length
    
let total = basketPanelTotalPrice.textContent = userOrder.reduce((sum, item) => sum + Number(item.price*item.amount), 0)+'₽'
}


export default renderBasket