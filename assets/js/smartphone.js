

$(document).ready(function() { //Funkcija būs pieejama tikai tad kad dokuments būs gatavs. Saglabā id kā var mainīgo. Saglabā faila nosaukumu, atvešinot nevajadzīgās path daļas. Ja faila nosaukums sakrītīs tad iedos pareizo id. Šis ir domāts, lai compare lapa neparādītos informācija, kamēr nekas vēl nav uzspiests.
    var id1 = "Product1";
    var fileName = location.href.split("/").slice(-1); 
    
    if(fileName == "Product_page_smartphone.html"){
        loadSmartphone(id1);
    }
    if(fileName == "Product_page_headphone.html"){
        loadHeadphone(id1);
    }
    // loadSmartphone(id1);    
})


var phoneid;
function loadSmartphone(id) { // funkcijas, kas saņem id un ielādē datus.
    $.getJSON('assets/js/smartphones.json', function (data) { // Ar getJson dabū datus no json faila, paņem iepriekš saglabāto (script.js) telefona id un(compare.js telefona id) no local storage atkarība no kuras lapas nāk pieprasījums. tad izveido mainīgo output kurā ieliek tagus un bilžu datus no json faila atkarība no iepriekš saglabātā id. Un pēc tam visu info no mainīgā ieliek .slider-inner klasē. Un tad ir redzamas bildes. Tālāk zemāk.
        phoneid = JSON.parse(localStorage.getItem('itemID'))
        console.log(phoneid);
        var output = '';
        output += '<img class="active" src="' + data[phoneid].img1 + '">';
        output += '<img src="' + data[phoneid].img2 + '">';
        output += '<img src="' + data[phoneid].img3 + '">';
        output += '<img src="' + data[phoneid].img4 + '">';
        output += '<img src="' + data[phoneid].img5 + '">';
        output += '<img src="' + data[phoneid].img6 + '">';
        output += '<h3>' + data[phoneid].Name + '</h3>';
        $('.slider-inner').html(output);
    
        //Šeit funkcija saņem produkta novietojuma id (compare lapā ir 3 produktu vietas un lai nejuktu kopā visi dati katram atsevišķi tiek iedots id) lai katrā vietā būtu citi dati atkarība no pieprasījuma. Un tad vēl paņem telefona id, kuru dabū no local storage, katru reizi, kad izvēlās telefonu šī funkcija saņem phoneid. Un tad datus ieliek #id vietā, un paņem no json faila konkrētā phoneid.sadaļas.
        $('#'+ id).html('<img src="' + data[phoneid].productCover + '">' )
        //Noteiktajā ID iekš html ieliek info no JSON faila
        $('#sNetworkTechnology'+ id).html(data[phoneid].NetworkTechnology); // 
        $('#sLaunchAnnounced'+ id).html(data[phoneid].LaunchAnnounced);
        $('#sLaunchStatus'+ id).html(data[phoneid].LaunchStatus);
        $('#sBodyDimensions'+ id).html(data[phoneid].BodyDimensions);
        $('#sBodyWeight'+ id).html(data[phoneid].BodyWeight);
        $('#sBodyBuild'+ id).html(data[phoneid].BodyBuild);
        $('#sBodySIM'+ id).html(data[phoneid].BodySIM);
        $('#sBodyExtra'+ id).html(data[phoneid].BodyExtra);
        $('#sDisplayType'+ id).html(data[phoneid].DisplayType);
        $('#sDisplaySize'+ id).html(data[phoneid].DisplaySize);
        $('#sDisplayResolution'+ id).html(data[phoneid].DisplayResolution);
        $('#sDisplayProtection'+ id).html(data[phoneid].DisplayProtection);
        $('#sDisplayExtra'+ id).html(data[phoneid].DisplayExtra);
        $('#sPlatformOS'+ id).html(data[phoneid].PlatformOS);
        $('#sPlatformChipset'+ id).html(data[phoneid].PlatformChipset);
        $('#sPlatformCPU'+ id).html(data[phoneid].PlatformCPU);
        $('#sPlatformGPU'+ id).html(data[phoneid].PlatformGPU);
        $('#sMemoryCardSlot'+ id).html(data[phoneid].MemoryCardSlot);
        $('#sMemoryInternal'+ id).html(data[phoneid].MemoryInternal);
        $('#sMemoryExtra'+ id).html(data[phoneid].MemoryExtra);
        $('#sMainCamera'+ id).html(data[phoneid].MainCamera);
        $('#sMainCameraFeatures'+ id).html(data[phoneid].MainCameraFeatures);
        $('#sMainCameraVideo'+ id).html(data[phoneid].MainCameraVideo);
        $('#sSelfieCamera'+ id).html(data[phoneid].SelfieCamera);
        $('#sSelfieCameraFeatures'+ id).html(data[phoneid].SelfieCameraFeatures);
        $('#sSelfieCameraVideo'+ id).html(data[phoneid].SelfieCameraVideo);
        $('#sSoundLoudspeaker'+ id).html(data[phoneid].SoundLoudspeaker);
        $('#sSoundJack'+ id).html(data[phoneid].SoundJack);
        $('#sCommsWLAN'+ id).html(data[phoneid].CommsWLAN);
        $('#sCommsBluetooth'+ id).html(data[phoneid].CommsBluetooth);
        $('#sCommsGPS'+ id).html(data[phoneid].CommsGPS);
        $('#sCommsNFC'+ id).html(data[phoneid].CommsNFC);
        $('#sCommsRadio'+ id).html(data[phoneid].CommsRadio);
        $('#sCommsUSB'+ id).html(data[phoneid].CommsUSB);
        $('#sFeaturesSensors'+ id).html(data[phoneid].FeaturesSensors);
        $('#sFeaturesExtra'+ id).html(data[phoneid].FeaturesExtra);
        $('#sBatteryType'+ id).html(data[phoneid].BatteryType);
        $('#sBatteryCharging'+ id).html(data[phoneid].BatteryCharging);
        $('#sBatteryStandby'+ id).html(data[phoneid].BatteryStandby);
        $('#sBatteryMusicplay'+ id).html(data[phoneid].BatteryMusicplay);
        $('#sMiscColors'+ id).html(data[phoneid].MiscColors);
        $('#sMiscModels'+ id).html(data[phoneid].MiscModels);
        $('#sMiscSAREU'+ id).html(data[phoneid].MiscSAREU);
        $('#sMiscPrice'+ id).html(data[phoneid].MiscPrice);
    });
}

function loadHeadphone(id) { // funkcijas, kas saņem id un ielādē datus.
    $.getJSON('assets/js/headphones.json', function (data) { // Ar getJson dabū datus no json faila, paņem iepriekš saglabāto (script.js) telefona id un(compare.js telefona id) no local storage atkarība no kuras lapas nāk pieprasījums. tad izveido mainīgo output kurā ieliek tagus un bilžu datus no json faila atkarība no iepriekš saglabātā id. Un pēc tam visu info no mainīgā ieliek .slider-inner klasē. Un tad ir redzamas bildes. Tālāk zemāk.
        headphoneID = JSON.parse(localStorage.getItem('itemID'))
        console.log(headphoneID);
        var output = '';
        output += '<img class="active" src="' + data[headphoneID].productCover + '">';
        output += '<h3>' + data[headphoneID].name + '</h3>';
        $('.slider-inner').html(output);
    
        // //Šeit funkcija saņem produkta novietojuma id (compare lapā ir 3 produktu vietas un lai nejuktu kopā visi dati katram atsevišķi tiek iedots id) lai katrā vietā būtu citi dati atkarība no pieprasījuma. Un tad vēl paņem telefona id, kuru dabū no local storage, katru reizi, kad izvēlās telefonu šī funkcija saņem phoneid. Un tad datus ieliek #id vietā, un paņem no json faila konkrētā phoneid.sadaļas.
        $('#'+ id).html('<img src="' + data[headphoneID].productCover + '">' )
        console
        //Noteiktajā ID iekš html ieliek info no JSON faila
        
        $('#type'+ id).html(data[headphoneID].type); // 
        $('#enclosure'+ id).html(data[headphoneID].enclosure); // 
        $('#wireless'+ id).html(data[headphoneID].Wireless);
        $('#noise_cancelling'+ id).html(data[headphoneID].NoiseCancelling);
        $('#mic'+ id).html(data[headphoneID].Mic);
        $('#transducer'+ id).html(data[headphoneID].Transducer);
        $('#price'+ id).html(data[headphoneID].Price);
        $('#callMusicControl'+ id).html(data[headphoneID].callMusicControl);
        $('#Talk_Through'+ id).html(data[headphoneID].TalkThrough);
       
    });
}




