//create svg element

var chart_widh = 800;
var chart_height = 400;
var bar_padding = 5;

var svg = d3
  .select('#chart')
  .append('svg')
  .attr('width', chart_widh)
  .attr('height', chart_height);

//bind data to the svg var and create bars
svg
  .selectAll('rect') //create
  .data(data)
  .enter()
  .append('rect') //call same as in create
  //space single elements out horizontally
  .attr('x', function(d, i) {
    return i * (chart_widh / data.length); // i is index, 0: 0, 1: 40, 2:80 etc; each having 5px space
  })
  .attr('y', function(d) {
    return chart_height - d * 5; //height of 100 => 700 to be subtraced from 800
  })
  .attr('width', chart_widh / data.length - bar_padding)
  //svg from left to right and top to bottom, we have to reverse that
  .attr('height', function(d) {
    return d * 5;
  })
  .attr('fill', '#7ed26d');

//create labels
svg
  .selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text(function(d) {
    return d;
  })
  //play with adding values in order to make description look nice
  .attr('x', function(d, i) {
    //return i * (chart_widh / data.length) + 10; // i is index, 0: 0, 1: 40, 2:80 etc; each having 5px space
    // better alternative
    return (
      i * (chart_widh / data.length) +
      (chart_widh / data.length - bar_padding) / 2
    );
  })
  .attr('y', function(d) {
    return chart_height - d * 5 + 15; //height of 100 => 700 to be subtraced from 800
  })
  .attr('font-size', 9)
  .attr('fill', '#fff');
