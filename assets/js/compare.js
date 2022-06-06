$(document).ready(function () {//Funkcija būs pieejama tikai tad kad dokuments būs gatavs. 
  var fileName = location.href.split("/").slice(-1); 
  loadProductList(fileName); //Izsauc product list funkciju


  $('.selectProduct').select2({ //Izsauc select2 bibliotēku, kas uztaisa smuku select ,kurā var meklēt un izvēlēties no saraksta.
    width: '100%' // Platums 100, jo savādāk nevar būt responsive, dēļ šitā 3h nevarēju responsive uztaisīt.
  });

  $(".selectProduct").change(function(){ // kad select izmainas, nu kad nomaina telefonu kuru salīdzināt, dabū select vērtību, kas ir cipars, kuru saglabā, lai otra funkcija varētu mainītu produkta datus, tad pārbauda kura ir tuvākā klase, un tad izsauc tuvākās klases funkciju.
    var optionID = this.value;
    localStorage.setItem('itemID', JSON.stringify(optionID));
    var id1 = "Product1";
    var id2 = "Product2";
    var id3 = "Product3";
    var fileName = location.href.split("/").slice(-1); 
    if($(this).closest(".leftProduct").length>0)
    {
      if (fileName == "Product_page_smartphone.html" || fileName == "compare.html") {
        loadSmartphone(id1);
      }
      else{
        loadHeadphone(id1);
      }
    }
    else if($(this).closest(".middleProduct").length>0)
    {
      if (fileName == "Product_page_smartphone.html" || fileName == "compare.html") {
        loadSmartphone(id2);
      }
      else{
        loadHeadphone(id2);
      }
    }
    else if($(this).closest(".rightProduct").length>0)
    {
      if (fileName == "Product_page_smartphone.html" || fileName == "compare.html") {
        loadSmartphone(id3);
      }
      else{
        loadHeadphone(id3);
      }
    }
    
  });
});

$(document).ready(function () {
      
});

function loadProductList(fileName) { // ielāde visus produktus no json file

  if (fileName == "Product_page_smartphone.html" || fileName == "compare.html") {
    $.getJSON('assets/js/smartphones.json', function (data) { // ar getJson dabū datus no json faila, tad mainīgajā output ieliek nulto vērtību lai nekas neradītos no sākumak kad atver lapu, un tad visas pārējas vērtības izmantojot for ciklu. Un tad visu, kas ir iekšā mainīgajā ieliek .selectProduct klasē.
      var output = '';
      output += '<option value="0"> -- Select Product -- </option> ">';
      for (var phone in data){
        output += '<option value=\"'+phone+'\"> '+ data[phone].Name+'</option> ">';
        $('.selectProduct').html(output);
      }
    });
  }
  else
  {
    $.getJSON('assets/js/headphones.json', function (data) { // ar getJson dabū datus no json faila, tad mainīgajā output ieliek nulto vērtību lai nekas neradītos no sākumak kad atver lapu, un tad visas pārējas vērtības izmantojot for ciklu. Un tad visu, kas ir iekšā mainīgajā ieliek .selectProduct klasē.
      var output = '';
      output += '<option value="0"> -- Select Product -- </option> ">';
      for (var headphone in data){
        output += '<option value=\"'+headphone+'\"> '+ data[headphone].name+'</option> ">';
        $('.selectProduct').html(output);
      }
    });
  }
}






