function basketPanelMenu({baskPanelcount, userOrder}){
let basketPanellistBtn = document.querySelector('.basket_panel_list_down_btn button')
let basketPanel = document.querySelector('.basket_panel_list')
let orderPanel = document.querySelector('.order_panel')
let orderPanelCloseBtn = document.querySelector('.order_panel_main_close')
let orderPanelType = document.querySelectorAll('.order_panel_right_orderType input')
let orderPanelAddress = document.querySelector('.order_panel_right_address')
let orderBtn = document.querySelector('.order_panel_right_btn button')
let basketBtn = document.querySelector('.basket_panel_main_btn')
  let nameInput = document.querySelector('input[name="name"]');
let phoneInput = document.querySelector('input[name="phone"]');
let address = document.querySelector('input[name="address"]');
let floor = document.querySelector('input[name="floor"]');
let intercom = document.querySelector('input[name="intercom"]');
let orderPanelContact = document.querySelector('.order_panel_right_contact')


let ordersInfo = []


function getOrderData (){
let orderObj = {
    name: nameInput?.value.trim() ?? '',
    phone: phoneInput?.value.trim() ?? '',
    address: address?.value.trim() ?? '',
    floor: floor?.value.trim() ?? '',
    intercom: intercom?.value.trim() ?? '',
    order: userOrder
} 



return orderObj
}



basketBtn.addEventListener('click', ()=>{


basketPanel.classList.toggle('open')
})


basketPanellistBtn.addEventListener('click', ()=>{

  
if(Number(baskPanelcount.textContent) <= 0) return;
orderPanel.classList.add('open')
})

let currentOrderType = 'order'; 
orderPanelType.forEach((orderType)=>{
orderType.addEventListener('click', ()=>{
    if (orderType.id === 'pickup') {
      orderPanelAddress.style.display = 'none'
 currentOrderType = 'pickup'
    }else{
            orderPanelAddress.style.display = 'flex'
 currentOrderType = 'order'
    }
})

})


  orderPanelCloseBtn.addEventListener('click', ()=>{
    orderPanel.classList.remove('open')
  })


  let error = document.createElement('p')
  error.classList.add('error')
      orderBtn.addEventListener('click', ()=>{
          error.remove();
        if (!nameInput.value.trim() || !phoneInput.value.trim())  {
  error.textContent = 'заполните поле'
  orderPanelContact.appendChild(error)
          }else if(currentOrderType ==='order'  &&  !address.value.trim() ){
            error.textContent = 'заполните поле'
  orderPanelAddress.appendChild(error)
          }        
  else{
  const orderData = getOrderData();
    orderData.type = currentOrderType;
    ordersInfo.push(orderData)
    
  nameInput.value = ''
  phoneInput.value = ''
  address.value = ''
  floor.value = ''
  intercom.value = ''
          }


  })

    let basketListUp  = document.querySelector('.basket_panel_list_up')

function checkWidth() {
  const existingButton = basketListUp.querySelector('.add_panel_main_close');

  if (window.innerWidth < 500) {
    if (!existingButton) {
      basketListUp.innerHTML += `<button class="add_panel_main_close " type="button">×</button>`;
    }
  } else {
    if (existingButton) {
      existingButton.remove();
    }
  }
}

checkWidth();
window.addEventListener('resize', checkWidth);


let basketListUpBtn = document.querySelector('.basket_panel_list_up')

basketListUpBtn.addEventListener('click', ()=>{
  basketPanel.classList.toggle('open')
})

}


export default basketPanelMenu