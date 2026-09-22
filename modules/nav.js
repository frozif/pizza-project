import addPanelMenu from "./addPanel.js"

function nav ({ navPanelType, cardsPanel, cardsPanelText, navPanelInfo, addPanel, userOrder, renderBasket, baskPanelcount}){

let navPanel = document.querySelectorAll('.pizza_menu_nav_main button')

  
  navPanel.forEach((btnNavPanel, index)=>{
btnNavPanel.addEventListener('click', (event)=>{
  cardsPanel.classList.remove('pizza_cards_panel_text')
  cardsPanelText.classList.add('hide')
cardsPanel.innerHTML = ''
  btnNavPanel.classList.remove('active')


   navPanel.forEach((btn, i) => {
                 btn.classList.remove('active')
        })

               btnNavPanel.classList.add('active')


let btnActive = document.querySelector('.active')



    navPanelType.forEach((type, i)=>{
   if(type.startsWith(btnActive.textContent.slice(0, 1))){

let info = navPanelInfo[type]
info.forEach((cardInfo)=>{
  const card = document.createElement('div')
  
    card.classList.add('pizza_cards_panel_Card')
    card.innerHTML  = `
      <img class="pizza_cards_panel_Card_img" src=${cardInfo.img} alt="картинка карточки">
<div class="pizza_cards_panel_Card_info">
  <h2 class="pizza_cards_panel_Card_price">${cardInfo.price}₽</h2>
  <p class="pizza_cards_panel_Card_name">${cardInfo.name}</p>
  <h2 class="pizza_cards_panel_Card_gram">${cardInfo.gram}г</h2>

</div>
<button class="pizza_cards_panel_Card_btn" type="button">Добавить</button>
    `

    cardsPanel.appendChild(card)
    // -----------
    let cardbtnElement = card.querySelector('.pizza_cards_panel_Card_btn')



addPanelMenu({cardbtnElement, addPanel, cardInfo, userOrder, renderBasket, baskPanelcount})

})

   }
      
    })


})




})
}


export default nav