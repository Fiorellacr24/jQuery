/*var cb = function(){
    alert("Cargo jQuery");
}
$(document).ready(cb);  

$(function(){
    alert("Cargo jQuery");
});*/

$( () => { //function(){}
    $(".popup-link").on('click',(e) => {
        e.preventDefault();
        $('.brand-popup').show();
    });
    
    $(".brand-popup .popup-close").on('click',(e) => {
        e.preventDefault();
        $('.brand-popup').hide();
    })
});