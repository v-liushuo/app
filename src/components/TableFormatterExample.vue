<script>
export default {
  mounted() {
    this.typeShow()
    this.showLi()
  },
  data: function () {
    return {
      array: []
    }
  },
  methods: {
    typeShow: function () {
      // let number = '500';
      // console.log(typeof number)
      // number = 500;
      // console.log(typeof number)
      // console.log(5 ** 2)
      // this.array.unshift("123", 'abcdefghijklmn')
      // console.log(this.array)
      // this.array.shift()
      // this.array.shift()
      // console.log(this.array)
    },
    showLi: function () {
      var list = document.querySelector('.output ul');
      var totalBox = document.querySelector('.output p');
      var total = 0;
      list.innerHTML = '';
      totalBox.textContent = '';
// number 1
      var products = ['Underpants:6.99',
        'Socks:5.99',
        'T-shirt:14.99',
        'Trousers:31.99',
        'Shoes:23.99'];

      for (var i = 0; i < products.length; i++) { // number 2
        var product = products[i].split(':')
        // number 3
        var name = product[0]
        var price = Number(product[1])
        // number 4
        total += price
        // number 5
        var itemText = name + ' - $ ' + price;

        var listItem = document.createElement('li');
        listItem.textContent = itemText;
        list.appendChild(listItem);
      }

      totalBox.textContent = 'Total: $' + total.toFixed(2);
      console.log(products[20])


    }
  }
}
</script>

<template>
  <div>
    <div class="output">
      <ul>

      </ul>
      <p></p>
    </div>
    <table>
      <caption>A summary of the UK's most famous punk bands</caption>
      <thead>
      <tr>
        <th scope="col">Band</th>
        <th scope="col">Year formed</th>
        <th scope="col">No. of Albums</th>
        <th scope="col">Most famous song</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">Buzzcocks</th>
        <td>1976</td>
        <td>9</td>
        <td>Ever fallen in love (with someone you shouldn't've)</td>
      </tr>
      <tr>
        <th scope="row">The Clash</th>
        <td>1976</td>
        <td>6</td>
        <td>London Calling</td>
      </tr>
      <tr>
        <th scope="row">The Damned</th>
        <td>1976</td>
        <td>10</td>
        <td>Smash it up</td>
      </tr>
      <tr>
        <th scope="row">Sex Pistols</th>
        <td>1975</td>
        <td>1</td>
        <td>Anarchy in the UK</td>
      </tr>
      <tr>
        <th scope="row">Sham 69</th>
        <td>1976</td>
        <td>13</td>
        <td>If The Kids Are United</td>
      </tr>
      <tr>
        <th scope="row">Siouxsie and the Banshees</th>
        <td>1976</td>
        <td>11</td>
        <td>Hong Kong Garden</td>
      </tr>
      <tr>
        <th scope="row">Stiff Little Fingers</th>
        <td>1977</td>
        <td>10</td>
        <td>Suspect Device</td>
      </tr>
      <tr>
        <th scope="row">The Stranglers</th>
        <td>1974</td>
        <td>17</td>
        <td>No More Heroes</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <th scope="row" colspan="2">Total albums</th>
        <td colspan="2">77</td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<style scoped>
@font-face {
  src: url("https://fonts.googleapis.com/css?family=Rock+Salt");
}

html {
  font-family: "helvetica neue", Helvetica, Arial, sans-serif;
}

thead th,
tfoot th {
  font-family: "Rock Salt", cursive;
}

th {
  letter-spacing: 2px;
}

td {
  letter-spacing: 1px;
}

tbody td {
  text-align: center;
}

tfoot th {
  text-align: right;
}

tfoot td {
  text-align: left;
}

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
}

thead th:nth-child(1) {
  width: 30%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 15%;
}

thead th:nth-child(4) {
  width: 35%;
}

th,
td {
  padding: 20px;
}

tbody th, td {
  border: 2px solid greenyellow;
}

</style>