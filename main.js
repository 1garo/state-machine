  var visualize = require('javascript-state-machine/lib/visualize');
  var StateMachine = require('javascript-state-machine');

  var fsm = new StateMachine({
    init: 'open',
    transitions: [
      { name: 'close', from: 'open',   to: 'closed' },
      { name: 'open',  from: 'closed', to: 'open'   }
    ]
  });

  console.log(visualize(fsm));
