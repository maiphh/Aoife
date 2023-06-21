<div class="slogan">
  <p>“<i><b>Wholeheartedly</b></i> made by Aoife”</p> 
</div>

<div class="logo">
  <img src="assets\logotrans.png" alt="">
</div>

<div class="exchange">
  <p>EXCHANGE POLICY</p>
</div>

<footer>


    <div class="footer-nav">
        <ul>
            <li class="contact"> Please contact us via: </li>
            <li><a href="https://www.instagram.com/aoifestudios/">INSTAGRAM</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100091733337326">FACEBOOK</a></li>
            <li><a href="https://shopee.vn/aoifestudios">SHOPEE</a></li>
            <li><a href="mailto:aoifestudios@gmail.com">EMAIL</a></li>
        </ul>
    </div>

    <div class="copyright">Copyright © Aoife Studios</div>
    
    
    </footer>

<style>

    @font-face {
  font-family: "blooming";
  src: url(..\src\fonts\9Slide03-IcielBlooming-Elegant-Sans1_1.ttf) format('truetype');
}

@font-face {
  font-family: "vollkron";
  src: url(..\src\fonts\Vollkorn-VariableFont_wght.ttf) format('truetype');
}

.slogan {
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.slogan p{
    font-family: "vollkorn";
}

.logo, .exchange {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo img{
    width: 10vw;
}

.exchange p{
    font-family: "vollkorn";
    font-weight: lighter;
    color: #666666;
    font-size: 13px;
}

footer {
  background-color: white;
}

.exchange {
    text-align: center;
}
.exchange a{
    color: #666666;
    font-family: 'vollkron';
    text-decoration: none;
}

.footer-nav {
  height: 150px;
  width: 100%;

}

.contact {
    font-family: "vollkron";
    font-weight: 500;
    font-style: italic;
    font-size: 16px;
}

.footer-nav ul {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-nav ul li {
    margin-left: 2vw;
    margin-right: 2vw;
  display: inline-block;
  line-height: 150px;
}

.footer-nav ul li a {
  font-family: 'blooming';
  color: black;
  font-size: 20px;
  margin: 0 20px;
  text-transform: uppercase;
  text-decoration: none;

}

.footer-nav ul li a:hover {
  opacity: 0.6;
  transition: 0.5s;
}

.copyright {
    text-align: center;
    color: #666666;
    font-family: 'vollkron';
    text-decoration: none;
    margin-bottom: 5px;
    font-size: 12px;
}


@media (max-width :960px) {



.logo img{
    width: 25vw;
}

.exchange p{
    font-size: 11px;
}


    .exchange a {
        font-size: 10px;
    }
    .footer-nav {
        margin-top: 50px;
    }

    .footer-nav ul {
        margin: 0;
        padding: 0;
  display: block;
  width: 100%;
}

.footer-nav ul li {
    margin: 0;
  display: block;
  line-height: 50px;
  text-align: center;
}

.footer-nav ul li a {
    font-size: 20px;
}

.contact {
    font-size: 12px;
}

li {
    height: 30px;
    line-height: 30px;
}

.copyright {
  font-size: 8px;
    margin-top: 50px;
}
}


</style>