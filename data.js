var data = [];

for (var i = 0; i < 25; i++) {
  //  var num = Math.floor(Math.random() * 50);
  var num = Math.floor(d3.randomUniform(1, 50)());
  data.push(num);
}

console.log(data);
