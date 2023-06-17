<script>
    import Navbar from "./Navbar.svelte";
    import Footer from "./Footer.svelte";
    
</script>
<main>
    <Navbar/>

<div class="title">
    EXCHANGE POLICY
</div>

<div class="container">
    <div class="content">
        <p> We really understand and sympathize with your 
            desire to return or exchange the items as you are 
            unhappy upon receiving it. Therefore, we want to 
            make it clear here. Please help us by carefully 
            reading the terms and conditions below: <br><br>
            
                
                                        
            1. We do not refund or exchange to another item with a lower price after purchasing. <br>
                                            
            2. We only support customers exchange the size of the same item or exchange to a new item if the item you received was damaged (photo and video for proving) in 3 days for online purchasing.
                         <br>                   
            3. The item for exchange MUST BE returned in original condition with tags and labels included as well.
                  <br>                          
            4. SALE items can not be refunded or exchanged. <br>
                        5. Customers must pay for the additional shipping fees for the exchanged items. Shipping fees are non-refundable.
            <br><br>
            
            Thank you for your attention. </p>
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
}

.container {
    margin-left: 10vw;
    margin-right: 10vw;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F8F6F3;
padding: 5vw;
}

.image img {
    width: 35vw;
}

.content {
    
    font-family: 'vollkorn';
    font-size: 16px;
    line-height: 27px;
}


@media (max-width: 960px) {

    .title{
        font-size: 30px;
        margin-left: 50px;
    }
    .container {
    margin-right: 10vw;
    margin-left: 50px;
    
}

.content p{
    font-size: 12px;
}
}

</style>