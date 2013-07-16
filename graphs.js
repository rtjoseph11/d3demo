var h = 400;
var w = 600;

var makeGraph = function(data){
  console.log('showing graph');
  var chart = d3.select('body').append('svg')
      .attr('width', w)
      .attr('height', h);
  var points = d3.select('svg').selectAll('circle').data(data);
  points.attr('r', function(d){
    return 1;
  })
         .attr('cx', function(data){
           return data.time * 4;
         })
         .attr('cy', function(data){
          return data.data.utilization * h;
         });
  points.enter().append('circle').attr('r', function(d){
    return 1;
  })
         .attr('cx', function(data){
           return data.time * 4;
         })
         .attr('cy', function(data){
          return data.data.utilization * h;
         });
  points.exit().remove();
};

$(document).on('ready',function(){
  $('#cpu').on('click', function(){
    makeGraph(cpuPoints);
  });
  $('#mem').on('click', function(){
    makeGraph(memPoints);
  });
  makeGraph(cpuPoints);
  // $('#all').on('click', function(){
  //   showAllGraph();
  // });
});