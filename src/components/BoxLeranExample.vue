<script>

</script>

<template>
  <div>
    <div class="outer">
      <div class="inner">
        <span>this is inner content</span>
      </div>

      <div class="box">
        i use the standard box model
      </div>
      <div class="box alternate">
        i use the alternate box model
      </div>
      <div class="container">
        Change my margin
      </div>
    </div>
    <div class="first-box">first box</div>
    <div class="second-box">second box</div>
    <div class="border-ex">
      this is a border example
    </div>
    <div class="text-fanning">
      <h1>中文文字的方向并不影响阅读</h1>
      <h1>play with writing modes</h1>
    </div>
  </div>
</template>

<style scoped>
.text-fanning h1 {
  writing-mode: horizontal-tb;
}
.border-ex {
  border-top: 5px dotted greenyellow;
  border-right: 1px solid black;
  border-bottom: 20px double rgb(23 55 145);
}

.first-box {
  margin: 50px;
  border: 2px solid greenyellow;
}

.second-box {
  margin: 20px;
  border: 2px solid darkslategray;
}

.container {
  border: rebeccapurple solid 30px;
  margin: 40px 30px 4em -4em;
}

.box {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 40px;
  margin: 40px;
  width: 300px;
  height: 150px;
}

.alternate {
  box-sizing: border-box;
}

.outer {
  margin: 0 auto;
  width: 50%;
  height: 50%;
  border: 2px solid blue;
}

span {
  border: 2px solid pink;
}

.inner {
  border: 2px solid rebeccapurple;
  margin: 30px;
  padding: 20px;
}

@media (min-width: 50em) {
  span {
    color: green;
    background-color: orange;
  }
}
</style>