// Select an element,
// Create the Graphviz renderer instance
// Create a transition factory
// Render from the 1st DOT source
// Render from the 2nd DOT source in the callback
const d3 = require('d3-graphviz');

d3.select("#graph1")
  .graphviz(useWorker)
    .transition(() => d3.transition().duration(2000))
    .renderDot('digraph {a -> b}', function () {
      this.renderDot('digraph {a -> b; a -> c}')
    })
