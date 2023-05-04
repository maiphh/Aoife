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
        <p> <b>Aoife Studios</b> is a female fashion brand founded in early 2023 and officially dedicated in May, 2023. Inspired by the Irish name “Aoife” /EE-fə/, which means “beauty” or "radiance", our brand prides ourselves on ability to cater customers’ preferences with our wholehearted-made clothing that makes people feel more radiant and rather beautiful. More than just a brand, we also want to bring a community that embraces both your outer and inner beauty. We believe that each of us deserves all the best clothing stuff to enhance our confidence wherever we are.
            <br><br>
            <b>Aoife Studios</b> là brand thời trang nữ được thành lập vào đầu năm 2023 và chính thức đi vào hoạt động từ Tháng 5 cùng năm. Lấy cảm hứng từ một tên riêng của người Ireland "Aoife" /EE-fə/, mang ý nghĩa "vẻ đẹp" hay "nét rạng rỡ", Aoife Studios hy vọng những sản phẩm của chúng mình sẽ phần nào đó tôn lên vẻ đẹp và nét rạng rỡ của bạn.
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
main{
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto auto 1fr auto;

}

.title {
    font-family: 'vollkron';
    margin-top: 200px;
    margin-left: 100px;
    font-size: 22px;
    font-weight: 500;
}

.container {
    display: grid;
    grid-template-columns: 35vw 50vw;
    margin-bottom: -120px;
    
}

.image img {
    width: 30vw;
}

.content {
    font-family: 'vollkorn';
    font-size: 16px;
    line-height: 27px;
}




@media (max-width: 960px) {
    .title{
        font-size: 18px;
        margin-left: 50px;
    }
    .container{
      place-items: center;
        grid-template-columns: auto;
        margin-bottom: 0px;
        
    }

    .content {
    margin-left: 10vw;
    margin-right: 10vw;
}

.content p{
    font-size: 12px;
}
}
</style>