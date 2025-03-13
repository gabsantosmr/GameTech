/* Aparecer a função de cadastro */
$(document).ready(function(){

    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#botao-cadastrar").hide();

    });

});

/* Mudar os produtos do carrossel de destaques */
$(document).ready(function() {

    console.log("jQuery está funcionando!");
    
    $("#computador").hide();
    $("#notebook").hide();
    $("#botao-celular").addClass("active");

    $("#botao-celular").click(function() {
        $("#celular").show();
        $("#computador").hide();
        $("#notebook").hide();
        $(".button2").removeClass("active");
        $(this).addClass("active");
    });

    $("#botao-computador").click(function() {
        $("#celular").hide();
        $("#computador").show();
        $("#notebook").hide();
        $(".button2").removeClass("active");
        $(this).addClass("active");
    });

    $("#botao-notebook").click(function() {
        $("#celular").hide();
        $("#computador").hide();
        $("#notebook").show();
        $(".button2").removeClass("active");
        $(this).addClass("active");
    });
});