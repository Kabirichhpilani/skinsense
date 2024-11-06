
let totalmrp=0;
let discout=0;
function cart_function(){
    const itemprice = parseInt(document.getElementById('item_price').innerText);
    totalmrp+=itemprice;
    document.getElementById('answer').innerText=totalmrp;
}
window.addEventListener('scroll', function() {
    const element = document.getElementById('animateMe');
    const position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('visible'); 
    }
  });

  const btnn = document.getElementById('btnn');
  btnn.addEventListener('click', function() {
    const element = document.getElementById('popup');
    element.classList.toggle('active');
    if (element.classList.contains('active')) {
      element.style.opacity = '1';
    } else {
      element.style.opacity = '0';
    }
  });
