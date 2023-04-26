
<script>
import Navbar from "./Navbar.svelte";
import Footer from "./Footer.svelte";

let width = 0;
</script>

<svelte:window bind:innerWidth={width}/>
<main>
    
    
    <Navbar/>
    <div class="banner">
        {#if width>960}
        <img src=".\src\assets\landing upper desktop.png" alt="">
        {:else} 
        <img src=".\src\assets\landing upper.png" alt="">
        {/if}
        <div class="button"> <a href="https://www.instagram.com/aoifestudios/"><img src="src\assets\button.png" alt=""></a></div>


    </div>



    <div class="package-container">

        <div class="brand-name">
            <img src="src\assets\brand middle.png" alt="">
        </div>

        <div class="packaging">
            <img src="src\assets\package middle.png" alt="">
        </div>

    </div>

    <div class="launch"> 
        <img src="src\assets\launch.png" alt="">
    </div>

    <div class="showcase">

        <div class="pink">
            <img src="src\assets\pink.png" alt="">
        </div>

        <div class="white">
            <img src="src\assets\white.png" alt="">
        </div>
    </div>

    <div class="quote"> 
        <img src="src\assets\“Wholeheartedly made by Aoife”.png" alt="">
    </div>

    <div class="logo-container">
        <img src="src\assets\logo.png" alt="">
    </div>

<Footer/>


</main>


<style>

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
    width: 200px;
    position: absolute;
    right: 7.5%;
    bottom: 18%;
}
.package-container {
    display: grid;
    grid-template-columns: auto auto;
    place-items: center;
    margin-top: 100px;

}

.brand-name img{
    width: 50vw;
}

.packaging img{
    width: 50vw;
}

.launch {
    display: flex;
    justify-content: left;
    margin-left: 100px;
    margin-top: 150px;
    margin-bottom: 50px;

}

.launch img {
    width: 500px;
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

.quote {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.quote img {
    width: 20vw;
}

.logo-container {
    margin-top: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-container img {
    width: 15vw;
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
}

    .package-container {
        grid-template-columns: auto;
        margin-top: 0px;
    
}

.brand-name img{
    width: 100vw;
}

.packaging img{
    width: 100vw;
}



.launch {
    justify-content: right;
    margin-left: 0px;
    margin-right: 50px;
    margin-top: 50px;
    margin-bottom: 25px;
}

.launch img {
    width: 200px;
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

.quote img {
    width: 30vw;
}

.logo-container {
    margin-top: 70px;
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
