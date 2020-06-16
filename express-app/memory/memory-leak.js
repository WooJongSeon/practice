
const express = require('express');
const app = express();

var heapdump = require('heapdump');
var memoryLeak = [];

function LeakedObject(){ };

app.use('/leak',function(req,res,next){
  for(var i=0;i<100000;i++){
        memoryLeak.push(new LeakedObject());
  }
  res.send('making memory leak. Current memory usage :' +(process.memoryUsage().rss / 1024 / 1024) + 'MB');
});

app.use('/heapdump',function(req,res,next){
  var filename = '/Users/terry/heapdump' + Date.now() + '.heapsnapshot';
  heapdump.writeSnapshot(filename);
  res.send('Heapdump has been generated in '+filename);

});

app.listen(3000, () => console.log(`Server up and running on ${3000}`));
