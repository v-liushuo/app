<template>
  <div>
    <link>
    <h1>this is an h1</h1>
    <!--    <span>this is between span</span>-->
    <p>this is a p</p>
    <h1 class="second-h1">this is second h1</h1>
    <span>this is a span</span>
    <ul>
      <li>list 1</li>
      <li class="special">list 3</li>
      <li><em>list 4</em></li>
      <li><kbd>Command + Space</kbd></li>
    </ul>
    <a href="https://www.baidu.com">click跳转到百度首页</a>
    <div class="outer">
      <div class="box">内部盒子的宽度为90% - 30px</div>
    </div>
    <div class="box-v2"></div>
    <p>
      Let's use:
      <span>Cascading</span>
      <span>Style</span>
      <span>Sheets</span>
    </p>
    <div class="transform-box">

    </div>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  border: 1px solid black;
  background-color: lime;
}
.transform-box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn);
}

body {
  background-color: pink;
}

/*
 this is
 */
@media (min-width: 30em) {
  body {
    background-color: blue;
  }
}

.box-v2 {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: #41b883;
  transform: rotate(0.9deg);
}

h1 {
  color: #41b883;
}

span,
p {
  color: red;
}

li {
  list-style-type: circle;
}

li.special {
  color: #45903c;
  font-weight: bold;
}

li em {
  color: rebeccapurple;
}

h1 + p {
  font-size: 200%;
}

.second-h1 {
  font-size: 300%;
}

a:link {
  color: hotpink;
}

a:visited {
  color: green;
}

a:hover {
  text-decoration: none;
}

ul {
  border: black;
}

body + div {
  border: 2px solid crimson;
}

.outer {
  border: 5px solid black;
}

.box {
  padding: 10px;
  width: calc(90% - 30px);
  background-color: rebeccapurple;
  color: white;
}
</style>
