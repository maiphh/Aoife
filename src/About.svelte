<script>
    import Navbar from "./Navbar.svelte";
    import Footer from "./Footer.svelte";
    
</script>
<main>
    <Navbar/>

<div class="title">
    ABOUT US
</div>

<div class="container">

    <div class="image">
        <img src="assets\logo2.png" alt="">
    </div>

    <div class="content">
        <p><b> Aoife Studios </b> is a female fashion brand founded in early 2023 and officially dedicated in May, 2023. <br><br>

            Inspired by the Irish name “Aoife” /EE-fə/, which means “beauty” or "radiance", our brand prides ourselves on ability to cater customers’ preferences with our wholehearted-made clothing that makes people feel more radiant and rather beautiful. <br><br>
            
            More than just a brand, we also want to bring a community that embraces both your outer and inner beauty. We believe that each of us deserves all the best clothing stuff to enhance our confidence wherever we are.
        </p>
        
        
    </div>
</div>

    <Footer/>

</main>

<style>
@font-face {
  font-family: "vollkron";
  src: url(..\src\fonts\Vollkorn-VariableFont_wght.ttf) format('truetype');
}

@font-face {
  font-family: "blooming";
  src: url(..\src\fonts\9Slide03-IcielBlooming-Elegant-Sans1_1.ttf) format('truetype');
}
main{
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto auto 1fr auto;

}

.title {
    font-family: 'blooming';
    margin-top: 200px;
    margin-left: 10vw;
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 50px;
    font-weight: 550;
    text-shadow: 0px 3px 2px #C8C7C4;
    font-weight: 600;
    
}

.container {
    background-color: #F8F6F3;
    display: grid;
    grid-template-columns: 25vw 50vw;
    margin-bottom: -120px;
    place-items: center;
    margin-bottom: auto;
    margin-right: 10vw;
    margin-left: 10vw;
}

.image img {
    width: 25vw;
}

.content {
    margin-left: 5vw;
    font-family: 'vollkorn';
    font-size: 16px;
    line-height: 27px;
}





@media (max-width: 960px) {
    .title{
        font-size: 30px;
        margin-left: 20vw;
    }
    .container{
        background-color: #F3F2EE;
      place-items: start;
        grid-template-columns: auto;
        margin-bottom: 0px;
        
    }

    .content {
        background-color: #F8F6F3;
    margin-left: 10vw;
    margin-right: 10vw;
    padding: 5vw;
}

.content p{
    font-size: 12px;
}

.image{
    margin-left: 10vw;
    margin-bottom: -10px;
}
}
</style>