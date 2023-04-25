<header>
    <nav>
  <input type="checkbox" id="menu">
  <label for="menu" class="menu-icon">
  <img src="src\assets\menu.png" alt="menu">
  </label>

  <label class="logo"><a href="index.html"><img src="src\assets\logo.png" alt=""></a></label>
      <ul>
        
        <li><a href="category.html">ABOUT US</a></li>
        <li><a href="contact.html">EXCHANGE POLICY</a></li>
      </ul>
    </nav>
  </header>

<style>
@font-face {
  font-family: "blooming";
  src: url(..\src\fonts\9Slide03-IcielBlooming-Elegant-Sans1_1.ttf) format('truetype');
}

nav {
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  
}
.logo {
    margin: auto;
  width: 50%;
}
.logo a img{
    
margin-top: 30px;
margin-left: 30px;
  width: 100px;
 
}

.menu-icon img{
  height: 30px;
  width: 30px;
}
nav ul {
  float: right;
  margin-right: 100px;
}

nav ul li,
.logo {
  display: inline-block;
  line-height: 80px;
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
  float: right;
  line-height: 80px;
  margin-right: 40px;
  display: none;
}

#menu {
  display: none;
}

/* Mobile layout */
@media (max-width: 960px) {
    .logo a img{
    
    margin-top: 15px;
    }

  .menu-icon {
    display: block;
    }
  nav ul {

    width: 100%;
    height: 100vh;
    top: 80px;
    text-align: center;
    right: -120%;
    transition: all .5s;
    position: fixed;
    background-color: #FBFBFA;
    margin-right: 0;
    z-index: 1;
  }
  nav ul li {
    display: block;
  }

  nav ul li a {
    padding: 10px 20vw;
  }
  #menu:checked ~ ul{
    right: 0;
  }

}
</style>