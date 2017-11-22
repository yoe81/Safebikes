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