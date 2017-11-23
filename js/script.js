//funcion galeria de imagenes
i = 0,images = ["imagenes/1.jpg",
                "imagenes/2.jpg",
                "imagenes/3.jpg",
                "imagenes/4.jpg",
                "imagenes/5.jpg",
                "imagenes/6.jpg",
                "imagenes/7.jpg",
                "imagenes/8.jpg",
                "imagenes/9.jpg",
                "imagenes/10.jpg",
                "imagenes/11.jpg"];

function mySlide(param){
            if ( param == 'back' )
            {
                i++;
                if ( i == images.length)
                {
                    i = images.length - 1;
                }
                document.getElementById( 'slide' ).src = images[i];
            }
            else
            {
                i--;
                if ( i < 0 )
                {
                    i = 0;
                }
                document.getElementById( 'slide' ).src = images[i ];
            }
        }

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//coockie
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("Usuario");
    if (user != "") {
        alert("Hola de nuevo " + user);
    } else {
       user = prompt("Ingresa tu nombre de usuario:","");
       if (user != "" && user != null) {
           setCookie("usuario", user, 30);
       }
    }
}

