function addPanelMenu({cardbtnElement, cardInfo, userOrder, renderBasket, baskPanelcount}){
let addPanel = document.querySelector('.add_panel')


cardbtnElement.addEventListener('click', (event)=>{
addPanel.innerHTML  = ''
    addPanel.classList.add('open')
let addPanelMain = document.createElement('div')
addPanelMain.classList.add('overlay')
addPanelMain.innerHTML = `
   <div class="container">
<div class='add_panel_main'>
<div class="add_panel_main_info">
         <h2 class="add_panel_main_title">${cardInfo.name}</h2>
         <button class="add_panel_main_close" type="button">×</button>
      </div>
      <div class="add_panel_main_up">
        <img src=${cardInfo.img} alt="add img">
        <div class="add_panel_main_up_info">
          <h2 class="add_panel_main_up_info_title">${cardInfo.title}</h2>
          <ul class="add_panel_main_up_info_list">
           ${cardInfo.Ingredients.map((i) => `<li>${i}</li>`).join('')}
            <span>${cardInfo.gram}г, ккал ${cardInfo.kcal}</span>
          </ul>
        </div>
      </div>
              <div class="add_panel_main_down">
<div class="add_panel_main_down_left">
          <button type="button" class="add_panel_main_down_btn">Добавить</button>
          <div class="add_panel_main_down_amount_panel">
   <button type="button" class="add_panel_main_down_amount_minus">-</button>
<p class="add_panel_main_down_amount">1</p>
   <button type="button" class="add_panel_main_down_amount_plus">+</button>
</div>
          </div>
          <div class="add_panel_main_down_right">
            <p class="add_panel_main_down_price">${cardInfo.price}₽</p>
</div>
        </div>
</div>
  </div>
    `

    addPanel.appendChild(addPanelMain)

    let addPanelamount = addPanelMain.querySelector('.add_panel_main_down_amount')
let addPanelPlusBtn = addPanelMain.querySelector('.add_panel_main_down_amount_plus')
let addPanelMinusBtn = addPanelMain.querySelector('.add_panel_main_down_amount_minus')

let addPanelCloseBtn = addPanelMain.querySelector('.add_panel_main_close')
let addPanelBtn = addPanelMain.querySelector('.add_panel_main_down_btn')
      let amount = 1;

  
function amountBtns (type, sign){
  type.addEventListener('click', ()=>{

    if (amount + sign < 1) return;

      amount += sign
addPanelamount.textContent = amount
})
}

function closeBtn(type){
      type.classList.remove('open')
}

amountBtns(addPanelPlusBtn, +1)

amountBtns(addPanelMinusBtn, -1)





addPanelBtn.addEventListener('click', ()=>{

let orderCardfind = userOrder.find(find => find.name === cardInfo.name)


if(orderCardfind){
orderCardfind.amount += amount;
  renderBasket({ userOrder, baskPanelcount }); 
}else{
userOrder.push({
  img: cardInfo.img,
  price: cardInfo.price,
  name: cardInfo.name,
  gram: cardInfo.gram,
  kcal: cardInfo.kcal,
  amount: amount
});
}

  renderBasket({ userOrder, baskPanelcount });  




  closeBtn(addPanel)
})


addPanelCloseBtn.addEventListener('click', ()=>{
  closeBtn(addPanel)
})


})
}


export default addPanelMenu