<script>

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
    document.getElementById("menu").checked = false;
  }
  prevScrollpos = currentScrollPos;
}

</script>
<header style="margin-bottom: 80px;">
    <nav id="navbar">
  <input type="checkbox" id="menu">
  <label for="menu" class="menu-icon">
  <img src="assets\menu.png" alt="menus">
  </label>

  <ul>
        
    <li><a href="about.html">ABOUT US</a></li>
    <li><a href="exchange.html">EXCHANGE POLICY</a></li>
  </ul>

  <label class="logo"><a href="index.html"><img src="assets\logo.png" alt=""></a></label>
      
    </nav>
  </header>

<style>
@font-face {
  font-family: "blooming";
  src: url(..\src\fonts\9Slide03-IcielBlooming-Elegant-Sans1_1.ttf) format('truetype');
}

nav {
  background-color: #F3F2EE;
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: 0.5s;
}
.logo {
  position: absolute;
  margin-left: 15vw;
}
.logo a img{
    
margin-top: 20px;

  width: 100px;
 
}

.menu-icon img{
  height: 30px;
  
}
nav ul {
  float: left;
  padding: 0;
  margin-left: 5vw;
  margin-right: 11vw;
  width: 30vw;
}

nav ul li,
.logo {
  display: inline-block;
  line-height: 60px;
  margin: 0 5px;
}

nav ul li a{

    color: black;
  font-family: "blooming";
  font-size: 30px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 13px;
  border-radius: 3px;
}

nav ul li a:hover {
  background-color: var(--grey);
  color: #e8e8e8;
  transition: 0.5s;
}

.menu-icon {
  cursor: pointer;
  font-size: 28px;
  float: left;
  line-height: 80px;
  margin-left: 40px;
  display: none;
}

#menu {
  display: none;
}

/* Mobile layout */
@media (max-width: 960px) {

  .logo {
    line-height: 80px;
    left: 45%;
    margin: 0;
  }
    .logo a img{
    width: 50px;
    margin-top: 0px;
    }

  .menu-icon {
    display: block;
    }

    .menu-icon img{
  height: 20px;
  
}
  nav ul {
    margin: 0;
    opacity: 50%;
    width: 50%;
    height: 100vh;
    top: 80px;
    text-align: center;
    left: -80%;
    transition: all .5s;
    position: fixed;
    background-color: #FBFBFA;
    z-index: 1;
    padding: 0;
  }
  nav ul li {
    display: block;
  }

  nav ul li a {
    opacity: 100%;
    font-size: 24px;
  }
  #menu:checked ~ ul{
    left: 0%;
  }

}
</style>