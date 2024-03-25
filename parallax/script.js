const title = document.querySelector('.title');
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const bush1 = document.querySelector('.bush1')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')



document.addEventListener('scroll', function(){
    var value = window.scrollY;
    //
    title.style.marginTop = value *2 + 'px';

    leaf1.style.marginLeft = -value + 'px';
    leaf2.style.marginLeft = value + 'px';

    bush2.style.marginBottom = -value *1.1 + 'px';
    
    mount1.style.marginBottom= -value * 0.5 + 'px'
    mount2.style.marginBottom= -value *0.00001 + 'px'

});