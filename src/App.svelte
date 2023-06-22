
<script>
import Navbar from "./Navbar.svelte";
import Footer from "./Footer.svelte";
import axios from 'axios';
import cors from 'cors';



let config = {
    headers: {
        Token: "5fb460d2820eab2adf09165d66ff028de52519bb",
    }
}

let status = async () => {
    let response = await axios.get("https://services.giaohangtietkiem.vn/services/shipment/v2/S22145818.BO.MN8-04-C62.1058989704", config );
    let data = response.data;
    console.log(data);
}

status();

let width = 0;
</script>

<svelte:window bind:innerWidth={width}/>
<main>
    
    
    <Navbar/>
    <div class="banner">
        {#if width>960}
        <img src="assets\landing upper desktop.png" alt="">
        {:else} 
        <img src="assets\landing upper.png" alt="">
        {/if}
        <div class="button"> <a href="https://www.instagram.com/aoifestudios/"><img src="assets\button.png" alt=""></a></div>


    </div>



    <div class="package-container">

        <div class="brand-name">
            <div class="meet"> <p><i>Meet <b>Aoife Team</b></i></p></div>
            <div class="sub-meet"> <p> We bring our muses the <i><b>brightest</b></i> stuff.</p></div>
            <p class="para">Aoife Studios is a female fashion brand founded in early 2023 and officially dedicated in May, 2023. Inspired by the Irish name "Aoife" /EE-fə/, which means "beauty" or "radiance", our brand prides ourselves on...</p>
            <div class="read-more"> <a href="about.html">READ MORE</a></div>
        </div>

        <div class="packaging">
            <img src="assets\package middle.png" alt="">
        </div>

    </div>

    <div class="logo-mid">
        <img src="assets\logo-mid.png" alt="">
    </div>
    
    <div class="insta">
        <a href="https://www.instagram.com/aoifestudios/"><img src="assets\insta.png" alt=""></a>
    </div>

    <div class="divider">
        <img src="assets\slogan-divider.png" alt="">
    </div>

    <div class="showcase">

        <div class="pink">
            <img src="assets\pink.png" alt="">
        </div>

        <div class="white">
            <img src="assets\white.png" alt="">
        </div>
    </div>

    <div class="overlay">
        <img src="assets\overlay.png" alt="">
    </div>
  


<Footer/>


</main>


<style>
    @font-face {
  font-family: "blooming";
  src: url(..\src\fonts\9Slide03-IcielBlooming-Elegant-Sans1_1.ttf) format('truetype');
}

@font-face {
  font-family: "vollkron";
  src: url(..\src\fonts\Vollkorn-VariableFont_wght.ttf) format('truetype');
}

@font-face {
  font-family: "garamond";
  src: url(..\src\fonts\GaramondCondensedLightRegular.ttf) format('truetype');
}

    main{
        overflow: hidden;
    }

/* .banner {
    position: relative;
        width: 100vw;
        height: 100vh;
        background: url(".\assets\landing upper desktop.png") no-repeat;
        background-size: cover;
    } */
    .banner {
        position: relative;
    }
    .banner img{
        width: 100vw;
    }

.button img {
    width: 150px;
    position: absolute;
    left: 18%;
    bottom: 15%;
}

.button img:hover {
    opacity: 0.6;
    transition: 0.5s;
}
.package-container {
    font-family: "garamond";
    display: grid;
    grid-template-columns: auto auto;
    place-items: center;
    margin-top: 100px;

}

.brand-name{
    margin-left: 10vw;
    margin-right: 5vw;
}

.meet{
    font-size: 30px;
}

.sub-meet{
    font-size: 20px;
}

.read-more{
    font-family: "blooming";
    font-size: 22px;
    text-decoration: underline;
    float:right;
    margin-right: 10px;
    margin-top: 10px;
}

.read-more a{
    color: black;
}

.logo-mid{
    margin-top: 5vw;
    margin-bottom: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-mid img{
    width: 10vw;
}

.insta{
    
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.insta img{
    width: 30vw;
    z-index: 1000;
    margin-bottom: -7vw;
}

.insta a {
    z-index: 1000;
}

.divider {
    background-color: #E7E3DE;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 40vh;
    margin-bottom: -2vw;
}

.divider img{
    width: 30vw ;
}

.brand-name img{
    width: 50vw;
}

.packaging img{
    width: 40vw;
    margin-right: 10vw;
}

.launch {
    display: flex;
    justify-content: left;
    margin-left: 100px;
    margin-top: 150px;
    margin-bottom: 50px;

}

.launch img {
    width: 300px;
    margin-left: 90px;
}

.showcase {
    display: grid;
    grid-template-columns: 50vw 50vw;
}

.pink img {
    width: 50vw;
    
}

.white img {
    width: 50vw;
}

.overlay{
    margin-top: -5vw;
    margin-bottom: 5vw;
}

.overlay img{
    width: 100vw;
}

@media (max-width: 1600px){

.banner {
    background-size: contain;
}
}



@media (max-width: 960px){

    .button{
        width: 100vw;
        display: flex;
        align-items: center ;
        justify-content: center;
    }
    .button img {
    width: 180px;
    position:absolute;
    right: 0;
    left: 0;
    margin: auto;
    bottom: 12%;
}

    .package-container {
        grid-template-columns: auto;
        margin-top: 200px;
    
}

.brand-name{
    margin-left: 10vw;
    margin-right: 10vw;
    margin-bottom: 5vw;
}

.meet{
    font-size: 24px;
}

.sub-meet{
    font-size: 16px;
}

.brand-name .para{
    font-size: 12px;
}

.read-more{
    font-size: 22px;
}

.packaging img{
    width: 80vw;
    margin-right: 0vw;
}

.logo-mid img{
    width: 25vw;
}

.insta img{
    width: 70vw;

    margin-bottom: -7vw;
}

.divider {
    height: 25vh;
}

.divider img{
    width: 40vw ;
}

.showcase {
    grid-template-columns: auto ;
}

.pink img {
    width: 100vw;
    
}

.white img {
    margin-top: -10px;
    width: 100vw;
}
.quote {
    margin-top: 20px;
}
.quote img {
    width: 40vw;
}

.logo-container {
    margin-top: 70px;
}

.logo-container img {
    width: 25vw;
}




}

@media (max-width: 525px){
    .brand-name {
        margin-top: -100px;
    }
}

@media (max-width: 450px){
    .brand-name {
        margin-top: -200px;
    }
}


</style>
