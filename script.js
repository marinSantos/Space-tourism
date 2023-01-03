@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400&family=Bellefair&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ovo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ovo&family=Roboto+Condensed:wght@300;400&display=swap');
/*
Sem serifa
font-family: 'Barlow Condensed', sans-serif;
font-family: 'Roboto Condensed', sans-serif;

Com serifa
font-family: 'Ovo', serif;

*/

/* Configirações gerais */




.transition{
    transition: all 1s !important ;
}


html {
    scroll-behavior: smooth;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Barlow Condensed', sans-serif;
}




body {
    background-color: black;
 overflow: hidden;
}

h1,
h2,
a {
    color: white;
}

p,
span {
    font-family: 'Barlow Condensed', sans-serif;
    color: rgba(255, 255, 255, 0.774);
    letter-spacing: 1px;
}

h1 {
    font-family: 'Ovo', serif;
}

h3 {
    color: rgba(255, 255, 255, 0.623);
    font-weight: 400;
    font-size: 25px;
    letter-spacing: 1px;
}

a {
    font-size: 13px;
    text-decoration: none;
    font-family: 'Roboto Condensed', sans-serif;
}

/* Cabeçalho */

header {
    display: flex;
    margin-top: 25px;
    align-items: center;
    height: 60px;
    width: 100%;
    padding: 0 40px;
    backdrop-filter: blur(2rem);
    position: fixed;
    z-index: 100;

    #mobile {
        display: none;
    }

    span {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.774);
        letter-spacing: 1px;
    }

    header img {
        width: 40px;
    }

    .logo {
        height: 100%;
        width: 46%;
        display: flex;
        align-items: center;
    }

    .logo::after {
        content: "";
        display: block;
        position: relative;
        height: 1px;
        width: 100%;
        z-index: 10;
        margin-left: 50px;
        margin-right: -18px;
        background: rgb(255, 255, 255);
        order: 1;
        opacity: 0.25;
    }

    .separador {
        width: 7%;
        background-color: rgba(18, 20, 33, 0);
        height: 100%;
    }

    #nav {
        height: 100%;
        width: 36%;
        display: flex;
        column-gap: 16%;
    }

    #nav a {
        display: flex;
        column-gap: 5px;
        align-items: center;
        height: 100%;
        border-bottom: solid 1px rgba(255, 255, 255, 0);

    }

    #nav a:hover {
        border-bottom: solid 1px white;
        transition: all 0.6s;
        cursor: pointer;
    }

    .atual {
        border-bottom: solid 1px white !important;
    }

}


/*/* 00 Início */

.mainSlider {
    width: 100%;
    height: 100%;
}

.mainSlides {
    width: 100%;
    height: 200%;
}

.sessao {
    width: 100%;
    height: 100%;
    position: absolute;
}

#inicio {
    background-image: url(imagenss/home/background-home-desktop.jpg);
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    top: 0%;
}

#main00 {
    display: flex;


}

#main00 h1 {
    font-size: 110px;
    font-weight: 100;
}

#main00 h3 {
    color: rgba(255, 255, 255, 0.623);
    font-weight: 400;
    font-size: 25px;
    letter-spacing: 1px;
}

/* parte00-2 */
.parte00-2 {
    width: 50%;
    height: 100vh;
}

.bola {
    width: 270px;
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 16%;
    right: 15%;
}

#explore {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 170px;
    height: 170px;
    border-radius: 60%;
    border: solid 40px rgba(255, 255, 255, 0.336);
    cursor: pointer;
    z-index: 10;
    transition: all 0.6s;
}

.parte00-2 h2 {
    letter-spacing: 1px;
    font-family: 'Ovo', serif;
    font-weight: 200;
    color: black;
    background-color: white;
    padding: 40px 40px;
    border-radius: 60%;
    width: 170px;
    height: 170px;
    align-items: center;
    justify-content: center;
    display: flex;
    border: solid 40px rgba(233, 227, 227, 0);
    transition: all 0.6s;
}

.parte00-2 h2:hover {
    width: 200px;
    height: 200px;
}

#explore:hover {
    border: solid 130px rgba(255, 255, 255, 0.336);

}

/* parte00-1 */

.parte00-1 {
    width: 50%;

    .text00 {
        width: 40%;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        position: absolute;
        left: 100px;
        bottom: 140px;
    }

    .text00 p {
        width: 100%;
        line-height: 25px;
        text-align: start;
        padding-top: 10px;
        font-size: 15px;
    }
}

/*/* 01 Destino */

#destino {
    background-image: url(imagenss/destination/background-destination-desktop.jpg);
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    top: 100%;
}


.parte1-01 {
    width: 50%;

    .parte1-01 span {
        font-size: 20px;
        color: rgba(255, 255, 255, 0.527);
        letter-spacing: 3px;
    }

}



.parte1-01 h3 {
    color: rgb(255, 255, 255);
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 1px;
    display: flex;
    column-gap: 15px;
    letter-spacing: 3px;
    position: absolute;
    left: 12%;
    top: 25%;
}


.img-01 {
    width: 340px;
}

.img-01 img {
    margin-top: 40px;
    width: 100%;
}

.slider1-01 {
    width: 100%;
    height: 400px;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    position: absolute;
    left: 0%;
    top: 30%;
}

.slides1-01 {
    width: 400%;
    height: 400px;
    display: flex;


}

.planet {
    width: 100%;
    height: 450px;
    padding-left: 120px;


}


/* parte2-01 */

.parte2-01 {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}


.slider2-01 {
    width: 350px;
    height: 400px;
    overflow: hidden;
    display: flex;
    column-gap: 60px;
    position: absolute;
    right: 15%;
    bottom: 15%;

}


.slides2-01 {
    width: 400%;
    height: 400px;
    display: flex;

}

.texto-01 {
    width: 350px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 30px;
    padding: 0 20px;


}

.texto-01 h3,
p,
hr {
    width: 90%;
}




.distance {
    display: flex;
    column-gap: 30px;
    justify-content: center;
}



#menu-01 {
    position: absolute;
    top: 25%;
    right: 22%;
}

.labels {
    display: flex;
    column-gap: 40px;
}

.labels label {
    color: #ffffff;
    border-bottom: solid 2px rgba(255, 255, 255, 0);
    cursor: pointer;
    padding-bottom: 3px;
    font-size: 13px;
}

.labels label:hover {
    border-bottom: solid 2px rgba(255, 255, 255, 0.37);
}


.active-01 {
    border-bottom: white 2px solid !important;
    transition: all .6s;
}





.parte2-01 input {
    display: none;
}

/* /* tripulaçao */
#tripulaçao {
    background-image: url(imagenss/crew/background-crew-desktop.jpg);
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    top: 200%;
    display: none
}

.main02 span {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.527);
    letter-spacing: 3px;
}

.main02 {
    width: 100%;

}

.parte1-02 {
    width: 50%;
}

.parte1-02 h3 {
    color: rgb(255, 255, 255);
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 1px;
    display: flex;
    column-gap: 15px;
    letter-spacing: 3px;
    position: absolute;
    left: 12%;
    top: 25%;
}


.main02 p {
    letter-spacing: 1px;
    line-height: 25px;
    width: 90%;
}

.main02 h1 {
    font-family: 'Ovo', serif;
    font-size: 35px;
    font-weight: 100;
}

.main02 h2 {
    padding-bottom: 10px;
    font-weight: 100;
    font-size: 25px;
    color: rgba(255, 255, 255, 0.623);
    font-family: 'Ovo', serif;
}

.texto-02 p {
    margin-top: 10px;
}

.texto-02 h3 {
    color: rgba(255, 255, 255, 0.623);
    font-family: 'Ovo', serif;
    font-weight: 400;
    font-size: 25px;
    letter-spacing: 1px;
}


.slider1-02 {
    width: 430px;
    height: 350px;
    overflow: hidden;
    display: flex;
    position: absolute;
    left: 12%;
    top: 200px;

}


.slides1-02 {
    width: 400%;
    height: 100%;
    display: flex;
    row-gap: 50px;

}

.texto-02 {
    width: 430px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.labels-02 {
    display: flex;
    column-gap: 25px;
    position: absolute;
    left: 12%;
    bottom: 15%;

}

.labels-02 label {
    border-radius: 50%;
    height: 10px;
    width: 10px;
    background-color: rgba(255, 255, 255, 0.527);
    cursor: pointer;
}



.parte2-02 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
}

.parte2-02 img {
    width: 400px;

}


.crew1 {
    margin-top: 50px;

}

.crew4 {
    margin-top: 50px;
}


.slider2-02 {
    width: 430px;
    height: 500px;
    overflow: hidden;
    display: flex;
    position: absolute;
    right: 15%;
    bottom: 15%;

}


.slides2-02 {
    width: 400%;
    height: 100%;
    display: flex;
    row-gap: 50px;

}

.espec {
    width: 430px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}




.active-02 {
    background-color: white !important;

}

input {
    display: none;
}


#radio0-1-02:checked~.primeiro-02 {
    margin-left: 0%;
}

#radio1-1-02:checked~.primeiro-02 {
    margin-left: -25%;
}

#radio2:checked~.primeiro-02 {
    margin-left: -50%;
}

#radio3-1-02:checked~.primeiro-02 {
    margin-left: -75%;
}

.margin0-02 {
    margin-left: 0%;

}

.margin1-02 {
    margin-left: -25%;

}

.margin2-02 {
    margin-left: -50%;

}

.margin3-02 {
    margin-left: -75%;

}

/* interações de menu */



#radio0-01:checked~.primeiro-01 {
    margin-left: 0%;
}

#radio1-01:checked~.primeiro-01 {
    margin-left: -25%;
}

#radio2-01:checked~.primeiro-01 {
    margin-left: -50%;
}

#radio3-01:checked~.primeiro-01 {
    margin-left: -75%;
}

.margin0 {
    margin-left: -0%;
    transition:  all 0s;
    

}

.margin1 {
    margin-left: -33%;
    transition:  all 0s;
    

}

.margin2 {
    margin-left: -100%;
    transition:  all 0s;
    

}

.margin3 {
    margin-left: -300%;
    transition:  all 0s;
    

}

/*/* 01 Tripulantes */



/*/* 01 Technologia */



@media screen and (max-width: 900px) and (min-width: 846px) {

    header {


        span {

            font-size: 13px;

        }


        .logo {
            height: 100%;
            width: 46%;
            display: flex;
            align-items: center;
        }

        .logo::after {
            margin-left: 50px;
            margin-right: -10px;
        }


        #nav {
            width: 30%;
            column-gap: 12%;
        }



    }



    .slider2-01 {

        right: 1%;
        bottom: 15%;
    }

    #menu-01 {
        right: 13%;
    }


    .bola {
        position: absolute;
        bottom: 22%;
        right: 2%;
    }


}

@media screen and (max-width:845px) {

    header {
        justify-content: center;
        column-gap: 50px;

        #mobile {
            display: flex;
        }

        #close {
            display: none;
            cursor: pointer;
        }

        #burguer {
            width: 40px;
            cursor: pointer;
        }

        span {

            font-size: 13px;

        }

        .separador {
            display: none;
        }

        .logo {
            height: 100%;
            width: 46%;
            display: flex;
            align-items: center;
        }

        .logo::after {
            width: 100%;
            margin-left: 0;
            margin-right: -50px;

        }

        #nav {
            display: flex;
            flex-direction: column;
            background-color: rgba(0, 0, 255, 0);
            position: relative;
            top: 230px;
            left: 130px;
            height: 400px;
            width: 220px;
            padding: 20px 20px;
            visibility: hidden;
        }

        #nav.mobile {
            display: flex;
            flex-direction: column;
            background-color: blue;
            position: relative;
            top: 230px;
            left: 130px;
            height: 400px;
            width: 220px;
            padding: 20px 20px;
             visibility: visible;
        }

        #nav a,
        span {
            font-size: 25px;
        }

    }

    #inicio {
        background-image: url(imagenss/home/background-home-tablet.jpg);
        background-size: cover;
    }

    #destino {
        background-image: url(imagenss/destination/background-destination-tablet.jpg);
        background-size: cover;

    }

    #tripulaçao {
        background-image: url(imagenss/crew/background-crew-tablet.jpg);
        background-size: cover;
    }

    #technologia {
        background-image: url(imagenss/technology/background-technology-tablet.jpg);
        background-size: cover;
    }

    #main00 {

        flex-direction: column;

    }

    #main00 h1 {
        font-size: 60px;
    }



    .parte00-2 {
        width: 100%;
        height: 50vh;
        justify-content: center;
        align-items: center;
        position: relative;
    }


    .parte00-1 {
        width: 100%;
        height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;


        .text00 {
            width: 100%;
            height: 100%;
            align-items: center;
            flex-direction: column;
            position: absolute;
            top: 40%;
            left: 0%;

        }

        .text00 p {
            width: 85%;
            line-height: 25px;
            padding-top: 10px;
            font-size: 15px;
            text-align: center;
        }
    }

    .bola {
        width: 100%;
        height: 100%;
        display: flex;
        position: static;

    }





    #destino {
        background-image: url(imagenss/destination/background-destination-tablet.jpg);
        background-repeat: no-repeat;
        top: 100%;
    }

    #main01 {
        display: flex;
        flex-direction: column;
    }

    .parte1-01 {
        width: 100%;
        height: 60vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 100px;

    }


    .img-01 {
        margin-top: 5px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;


    }

    .img-01 img {
        width: 250px;

    }

    .slider1-01 {
        width: 100%;
        height: 850px;

        display: flex;
        overflow: hidden;
        flex-direction: column;
        position: static;

    }

    .slides1-01 {
        width: 400%;
        height: 250px;
        display: flex;


    }

    .planet {
        width: 100%;
        height: 250px;
    
        padding-left: 0%;

    }



    /* parte2-01 */

    .parte2-01 {
        width: 100%;
        height: 40vh;
        padding-top: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

    }


    .slider2-01 {
        width: 350px;
        height: 250px;
        position: static;
    }


    .slides2-01 {
        width: 400%;
        height: 250px;
        display: flex;

    }

    .texto-01 h3,
    p,
    hr {
        width: 100%;
    }

    .texto-01 {
        row-gap: 10px;
    }



    #menu-01 {
        position: static;
        margin: 10px 0;

    }






    .parte1-01 h3 {
        column-gap: 15px;
        position: static;
    }


    #planet2 .img-01 {
        margin-right: -2 00px;
    }

    .margin0 {
        margin-left: -0%;
        transition:  all 0s;
        

    }

    .margin1 {
        margin-left: -40%;
        transition:  all 0s;
        

    }

    .margin2 {
        margin-left: -133%;
        transition:  all 0s;
        

    }

    .margin3 {
        margin-left: -337%;
        transition:  all 0s;
        

    }



}

@media screen and (max-width: 480px) {
    #nav {
            display: flex;
            flex-direction: column;
            background-color: rgba(0, 0, 255, 0);
            position: relative;
            top: 230px;
            left: 130px;
            height: 400px;
            width: 220px;
            padding: 20px 20px;
            visibility: hidden;
        }

        #nav.mobile {
            display: flex;
            flex-direction: column;
            background-color: blue;
            position: relative;
            top: 230px;
            left: 130px;
            height: 400px;
            width: 220px;
            padding: 20px 20px;
             visibility: visible;
        }
    #inicio {
        background-image: url(imagenss/home/background-home-mobile.jpg);
        background-size: cover;
    }

    #destino {
        background-image: url(imagenss/destination/background-destination-mobile.jpg);
        background-size: cover;

    }

    #tripulaçao {
        background-image: url(imagenss/crew/background-crew-mobile.jpg);
        background-size: cover;
    }

    #technologia {
        background-image: url(imagenss/technology/background-technology-mobile.jpg);
        background-size: cover;
    }

    header {
        justify-content: center;
        column-gap: 50px;

        #mobile {
            display: flex;
        }

        #close {
            display: none;
            cursor: pointer;
        }

        #burguer {
            width: 40px;
            cursor: pointer;
        }

        span {

            font-size: 13px;

        }

        .separador {
            display: none;
        }

        .logo {
            height: 100%;
            width: 46%;
            display: flex;
            align-items: center;
        }

        .logo::after {
            width: 100%;
            margin-left: 0;
            margin-right: -50px;

        }

        #nav {
            display: none;
        }



    }



    #main00 {

        flex-direction: column;

    }

    #main00 h1 {
        font-size: 50px;
    }



    .parte00-2 {
        width: 100%;
        height: 50vh;
        justify-content: center;
        align-items: center;
        position: relative;
    }


    .parte00-1 {
        width: 100%;
        height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        .text00 {
            width: 100%;
            height: 100%;
            align-items: center;
            flex-direction: column;
            position: absolute;
            top: 40%;
            left: 0%;

        }

        .text00 p {
            width: 75%;

            line-height: 25px;
            padding-top: 10px;
            font-size: 15px;
            text-align: center;
        }
    }

    .bola {
        width: 100%;
        height: 100%;
        display: flex;
        position: static;

    }






    #main01 {
        display: flex;
        flex-direction: column;
    }

    .parte1-01 {
        width: 100%;
        height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 100px;



    }


    .img-01 {
        margin-top: 5px;
        width: 100%;
        height: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .img-01 img {
        width: 220px;
        height: 100%;
    }

    .slider1-01 {
        width: 100%;
        height: 380px;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        position: static;


    }

    .slides1-01 {
        width: 400%;
        height: 380px;
        display: flex;

    }

    .planet {
        width: 100%;
        height: 380px;
       

    }


    /* parte2-01 */

    .parte2-01 {
        width: 100%;
        height: 50vh;
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

    }


    .slider2-01 {
        width: 300px;
        height: 250px;
        position: static;


    }


    .slides2-01 {
        width: 400%;
        height: 250px;
        display: flex;

    }

    .texto-01 {
        width: 300px;
        row-gap: 10px;
    }


    .texto-01 h3,
    p,
    hr {
        width: 100%;


    }





    #menu-01 {
        position: static;

    }









    .parte1-01 h3 {
        column-gap: 15px;
        position: static;
    }


    

    .margin0 {
        margin-left: -0%;
        transition:  all 0s;
         

    }

    .margin1 {
        margin-left: -40%;
        transition:  all 0s;
        

    }

    .margin2 {
        margin-left: -133%;
        transition:  all 0s;
        

    }

    .margin3 {
        margin-left: -337%;
         

    }

}
