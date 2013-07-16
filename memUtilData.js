var JSONMaker = function(route, value, dateIncrement){
  return {
    "docType":"log",
    "route":route,
    "uuid":"4C4C4544-0032-3310-8034-B1C04F353637-0026B951A65E",
    "time":dateIncrement,
    "data":{
      "utilization":value
    }
  };
};
var memPoints = _.range(100).map(function(item){
  return JSONMaker("memUtilization", Math.random(), item);
});

var cpuPoints = _.range(100).map(function(item){
  return JSONMaker("cpuUtilization", Math.random(), item);
});