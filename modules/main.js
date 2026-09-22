
  import { navPanelInfo, navPanelType } from '../data/menu.js'
  import nav from './nav.js'
  import renderBasket from './basketPanelCards.js'
  import basketPanelMenu from './basketPanel.js'



function main(){


let cardsPanel = document.querySelector('.pizza_cards_panel_Cards')
let cardsPanelText = document.querySelector('.cardsPanelText')
let baskPanelcount = document.querySelector('.basket_panel_list_up_count p')
let userOrder = [];



renderBasket({userOrder, baskPanelcount})


nav({navPanelType, cardsPanel, cardsPanelText, navPanelInfo, userOrder, renderBasket, baskPanelcount})






basketPanelMenu({baskPanelcount, userOrder})


}


export default main