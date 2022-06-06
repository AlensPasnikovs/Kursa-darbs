



$(document).ready(function(){ //Funkcija būs pieejama tikai tad kad dokuments būs gatavs

    LoadProducts();

    //Produktu filtrs.
    $('.list').click(function filterino(){ // Kad uzklikšķinās uz .list klases elementa izpildīsies ši funkcija
        const value = $(this).attr('data-filter'); //Saglabā data-filter vērtību kā mainīgo no uzspiestā elementa.
        if(value == 'all'){ // Ja mainīgā vērtība sakrīt ar all
            $('.itembox').show('1000'); // Parāda visus klases itembox elementus ar ātrumu 1000ms
        }
        else{ //Ja nē, 
            $('.itembox').not('.'+value).hide('1000'); //paslēpj ar ātrumu 1000ms visas klases kas nav vienādas ar mainīgā vērtību
            $('.itembox').filter('.'+value).show('1000');//Parāda ar ātrumu 1000ms visas klases kas ir vienādas ar mainīgā vērtību
        }
    })
    // pieveno aktīvo klase izvēlētajai izvēlei
    $('.list').click(function(){ // Kad uzklikšķinās uz .list klases elementa izpildīsies ši funkcija
        $(this).addClass('active').siblings().removeClass('active');
        //Pievieno uzspiestajam elementam klasi active un visiem pārējiem elementiem tajā ul sadaļā noņem
    })
})


function LoadProducts() { // ielāde visus produktus no json file
    $.getJSON('assets/js/smartphones.json', function (data) { // ar getJson dabū datus no json faila, tad mainīgajā output ieliek nulto vērtību lai nekas neradītos no sākumak kad atver lapu, un tad visas pārējas vērtības izmantojot for ciklu. Un tad visu, kas ir iekšā mainīgajā ieliek .selectProduct klasē.
        var output = '';
        for (var phone in data){
            output +='<div class="itembox smartphones" id=\"'+phone+'\">';
            output +='<a href="Product_page_smartphone.html">';
            output +='<img src=\"'+data[phone].productCover+'\">';
            output +='<div>'+ data[phone].Name +'</div>';
            output +='</a>';
            output +='</div>'; 
        }
        $('.product').html(output);
    });
    $.getJSON('assets/js/headphones.json', function (data) { 
        var output = '';
        for (var headphone in data){
            output +='<div class="itembox headphones" id=\"'+headphone+'\">';
            output +='<a href="Product_page_headphone.html">';
            output +='<img src=\"'+data[headphone].productCover+'\">';
            output +='<div>'+ data[headphone].name +'</div>';
            output +='</a>';
            output +='</div>'; 
        }
        $('.product').append(output);
    });
}
// for (var category in data){
        //     for (var item in category){
        //         console.log(data[category][item].productCover);
        //         output +='<div class="itembox smartphones" id=\"'+phone+'\">';
        //         output +='<a href="Product_page.html">';
        //         output +='<img src=\"'+data[phone].productCover+'\">';
        //         output +='<div>'+ data[phone].Name +'</div>';
        //         output +='</a>';
        //         output +='</div>'; 
        //     }
        // }


//Hamburger menu
$(document).ready(function() { //Funkcija būs pieejama tikai tad kad dokuments būs gatavs
    $('.hamburgerMenu').on('click', function() { // Kad uzklikšķinās uz .hamburgerMenu klases elementa izpildīsies ši funkcija
          $('ul').toggleClass('show'); //Pievieno/noņem ul elementam klasi show
    });
});


//Slider
$(document).ready(function() { //Funkcija būs pieejama tikai tad kad dokuments būs gatavs. 
    $('.next').on('click', function(){// Uzklikšķinot uz next atradīs aktīvo bildi un noņems tai klasi un pieliks nākamajai bildei. Ja aizšķirs līdz pēdējai bildei, atradīs pirmo un iedos tai klasi un noņems pēdējai. lai būtu loop
        var currentImg = $('.active');
        var nextImg = currentImg.next();
        
        if(nextImg.length && nextImg.is('img')){
            currentImg.removeClass('active');
            nextImg.addClass('active');
        }
        else{
            currentImg.removeClass('active');
            $('.slider-inner').find('img:first').addClass('active');
        }
    });

    $('.prev').on('click', function(){// Uzklikšķinot uz prev atradīs aktīvo bildi un noņems tai klasi un pieliks nākamajai bildei. Ja  mēģinās iet uz bildi, kas ir pirms pirmās bildes, atradīs pēdējo un iedos tai klasi un noņems pirmajai. lai būtu loop
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active');
            prevImg.addClass('active');
        }
        else{
            currentImg.removeClass('active');
            $('.slider-inner').find('img:last').addClass('active');
        }
    });
    
    
});


$(document).on('click','.itembox', function() { // kad uzlikšķinās uz telefona bildes tad saglabās telefona id un saglabās to local storage objektā, convertē objektu uz string.
    var itemID = $(this).attr('id');
    localStorage.setItem('itemID', JSON.stringify(itemID));    
})







// $('#searchbox').change(function searchbox(){ 

//     var value = $(this).value();
//     if(value.trim().length == 0){
//     // Show everything if no text is present
//     }
//     else
//     {
//         if ($('.itembox div').each(function() {

//             if ($(this).text().match(value)) {
//                 $('.itembox').hide('1000');
//             }
//             else
//             {
//                 $('.itembox').show('1000');
//             }
//           }));
//     }     
// });