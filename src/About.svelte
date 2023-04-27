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
        <p> <b>Aoife Studios</b> is a female fashion brand founded in early 2023 and officially dedicated in May, 2023.

          <br><br>  Inspired by the Irish name “Aoife” /EE-fə/, which means “beauty” or "radiance", our brand prides ourselves on ability to cater customers’ preferences with our wholehearted-made clothing that makes people feel more radiant and rather beautiful. </p>
    </div>
</div>

    <Footer/>

</main>

<style>
@font-face {
  font-family: "vollkron";
  src: url(..\src\fonts\Vollkorn-VariableFont_wght.ttf) format('truetype');
}

.title {
    font-family: 'vollkron';
    margin-top: 200px;
    margin-left: 100px;
    font-size: 26px;
    font-weight: bold;
}

.container {
    display: grid;
    grid-template-columns: 35vw 50vw;
    margin-bottom: -120px;
    
}

.image img {
    width: 35vw;
}

.content {
    font-family: 'vollkorn';
    font-size: 20px;
}


@media (max-width: 960px) {
    .title{
        font-size: 20px;
        margin-left: 50px;
    }
    .container{
      place-items: center;
        grid-template-columns: auto;
        margin-bottom: 0px;
        
    }

    .content {
    margin-left: 50px;
    margin-right: 10vw;
}

.content p{
    font-size: 14px;
}
}
</style>