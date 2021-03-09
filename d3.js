const d3 = require('d3-graphviz');
d3.graphviz("#graph")
    .renderDot('digraph {a -> b}');
