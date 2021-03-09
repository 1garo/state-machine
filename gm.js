var Gm = require("gm");

Gm()
.in("foo.jpg")
.in("foo2.jpg")
.delay(100)
.resize(600,600)
.write("fooo.gif", function(err){
  if (err) throw err;
  console.log("animated.gif created");
});
