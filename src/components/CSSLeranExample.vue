<script>

</script>

<template>
  <div>
    <h1>Jane Doe</h1>
    <div class="job-title">Web Developer</div>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
      texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
      paradisematic
      country, in which roasted parts of sentences fly into your mouth. </p>

    <h2>Contact information</h2>
    <ul>
      <li>Email: <a href="mailto:jane@example.com">jane@example.com</a></li>
      <li>Web: <a href="http://example.com">http://example.com</a></li>
      <li>Tel: 123 45678</li>
    </ul>
    <p id="layer">layer </p>
    <p id="site">site </p>
    <div class="inline-example">
      <p>I am a paragraph. A short one.</p>
      <ul>
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
      </ul>
      <p>I am another paragraph. Some of the <span class="block">words</span> have been wrapped in a
        <span>span element</span>.</p>
    </div>
  </div>
</template>

<style scoped>
.inline-example p,
.inline-example ul {
  border: 2px solid rebeccapurple;
  padding: .5em;
}

.inline-example .block,
.inline-example li {
  border: 2px solid blue;
  padding: .5em;
}

.inline-example ul {
  display: inline-flex;
  list-style: none;
}

.inline-example .block {
  display: block;
}

@media (min-width: 50em) {
@layer site ;
}

@layer page {
  #site {
    text-decoration: overline;
    color: red;
  }
}

@layer site {
  #site {
    text-decoration: underline;
    color: green;
  }
}

@layer other, layer, layer2;

@import url("other.css") layer(other);
@layer other {
  #layer {
    background-color: hotpink;
  }
}

#layer {
  color: red !important;
}


@layer layer2 {
  #layer {
    color: black !important;
  }
}

@layer {
  #layer {
    color: #fb6542 !important;
  }
}

@layer layer {
  #layer {
    color: rebeccapurple !important;
    width: 50px;
    margin: 0 auto;
    border: 5px double green;
  }
}

@layer {
  #layer {
    border-bottom-style: solid;
  }
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  color: #375e97;
  font-size: 2em;
  font-family: Georgia, 'Times New Roman', Times, serif;
  border-bottom-width: 4px;
  border-bottom-style: double;
  border-bottom-color: rebeccapurple;
}

h2 {
  font-size: 1.5em;
}

.job-title {
  color: #999999;
  font-weight: bolder;
}

a:link, a:visited {
  color: #fb6542;
}

a:hover {
  text-decoration: none;
  color: #41b883;
}

ul {

}
</style>