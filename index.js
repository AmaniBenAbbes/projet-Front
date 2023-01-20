
var verif = false;
sliderTab();
function sliderTab() {
    var slides = $('#myImg').attr('src');
    if (slides == 'images/slider-01.jpg') {
        $('#myImg').attr('src', 'images/slider-02.jpg');
    }
    else if (slides == 'images/slider-02.jpg') {
        $('#myImg').attr('src', 'images/slider-03.jpg');
    }
    else if (slides == 'images/slider-03.jpg') {
        $('#myImg').attr('src', 'images/slider-01.jpg');
    }
    if (verif == false){
        setTimeout(sliderTab, 4000);//recursivité reprendre la boucle
    } else{
        $('#myImg').attr('src', 'images/slider-01.jpg');
    }
}
// avec clic
var i = 1;
const NBMaxslide = 3;
$(document).ready(function () {
    $('.suivant').on('click', function () {
        verif = true;
        var imageAct = $('.active');
        var imgSuiv = imageAct.next();

        if (i < NBMaxslide) {
            i++;
            imageAct.removeClass('active').css('z-index', -10); //supprimer la class "active" de l'imgAct et l'ajouter a la suivante
            imgSuiv.addClass('active').css('z-index', 10);
        }
        else {
             i=1;
             imageAct.removeClass('active').css('z-index', -10);
             $("#myImg").addClass('active').css('z-index', 10);
        }
    });
});
$(document).ready(function () {
    $('.precedent').on('click', function () {
        verif = true;
        var imageAct = $('.active');
        var imgprecedente = imageAct.prev();

        if (i>1) {
            i--;
            imageAct.removeClass('active').css('z-index', -10);
            imgprecedente.addClass('active').css('z-index', 10);
        } else {
            i = NBMaxslide;
            imageAct.removeClass('active').css('z-index', -10);
            $("#myImg2").addClass('active').css('z-index', 10);
        }
    });
});




$(document).ready(function () {
    $("#meat1").click(function () {
        $("#vegan").hide(),
            $("#fish").hide(),
            $("#meat").show();
    });
    $("#show").click(function () {
        $("p").show();
    });
});

$(document).ready(function () {
    $("#vegan1").click(function () {
        $("#meat").hide(),
            $("#fish").hide(),
            $("#vegan").show();
    });
});
$(document).ready(function () {
    $("#fish1").click(function () {
        $("#vegan").hide(),
            $("#meat").hide(),
            $("#fish").show();
    });
});
$(document).ready(function () {
    $("#all").click(function () {
        $("#vegan").show(),
            $("#meat").show(),
            $("#meat").show();
    });
});


// bouton see more
//cacher le reste de la liste au chargement de la page
//a
$(document).ready(function () {
    $(".list").hide();

});
//si on clique sur le bouton see more, la liste s'affiche slowly el le bouton devient close
$(document).ready(function () {
    var cliquer = "see more"
    $("#clic").click(function () {
        if (cliquer == "see more") {
            $('.list').slideDown("slow");
            $('#clic').html("close");
            cliquer = "close";
        }
        else{
            $('.list').hide(1000);
            $('#clic').html("<span class=\"material-symbols-outlined\">restaurant_menu</span>see more");
            cliquer = "see more";
        }
    });
});

$(document).ready(function () {
    $(".list2").hide();

});
//fonction si on clique sur le bouton see more, la liste s'affiche slowly el le bouton devient masquer
$(document).ready(function () {
    var cliquer = "see more"
    $("#clic2").click(function () {
        if (cliquer == "see more") {
            $('.list2').slideDown("slow");
            $('#clic2').html("close");
            cliquer = "close";
        }
        else{
            $('.list2').hide(1000);
            $('#clic2').html("<span class=\"material-symbols-outlined\">restaurant_menu</span>see more");
            cliquer = "see more";
        }
    });
});


$(document).ready(function () {
    $(".list3").hide();

});
//fonction si on clique sur le bouton see more, la liste s'affiche slowly el le bouton devient masquer
$(document).ready(function () {
    var cliquer = "see more"
    $("#clic3").click(function () {
        if (cliquer == "see more") {
            $('.list3').slideDown("slow");
            $('#clic3').html("close");
            cliquer = "close";
        }
        else{
            $('.list3').hide(1000);
            $('#clic3').html('<span class="material-symbols-outlined">restaurant_menu</span>see more');
            cliquer = "see more";
        }
    });
});