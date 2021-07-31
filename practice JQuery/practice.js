$(document).ready(function(){

    let buttonShowHide = true;

    $("p").click(function(){
        $(this).hide();
    })

    $("button").click(function(){
        $("p").toggle();
    })
});