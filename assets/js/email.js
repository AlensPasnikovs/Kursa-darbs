 $(document).ready(function(){ //Funkcija būs pieejama tikai tad kad dokuments būs gatavs
    $(".SendButton").click(function(){ // Kad uzklikšķinās uz .SendButton klases elementa izpildīsies ši funkcija
        var name = $(".name").val(); // //Saglabā name vērtību kā mainīgo no .name klases elementa.
        var email = $(".email").val(); // tas pats ar pārējiem
        var phoneNumber = $(".phoneNumber").val();
        var subject = $(".subject").val();
        var message = $(".message").val();
        Email.send({ // Izpilda funkciju Email.send, ka nosūta epastu.

            // Host: "smtp.gmail.com",
            // Username: "alentipa3@gmail.com",
            // Password: "password",

            SecureToken: "7057e057-35ad-4e7d-8a64-5a3010a43481", // Šajā tokenā ir Host, Username un password (šifrētā veidā)
            From: email, // Norāda no kā tiek sūtīts šis epasts (formā ievadītais klienta epasts)
            To: 'alens.pasnikovs@gmail.com', // Norāda kam sūtīt šo epastu
            Subject: subject, // epasta temats kas ierakstīts formā
            Body: `Name: ${name} <br> Phone Number: ${phoneNumber} <br><br>${message}`
            // Epasta galvenais teksts, kurā tiks uzrādīts formā ievadītais vārds, telefona numurs un ziņa ko klients gribēja pateikt.

        }).then(message => alert("mail sent successfully")); //Kad epasts būs nosūtīts, tad klientam parādīsies alert ziņa ka epasts tika veiksmīgi nosūtīts.
        // nestrādā ja nav uz localhost.
    });
});

