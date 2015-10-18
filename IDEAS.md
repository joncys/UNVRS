# Composition

The main idea of the `unvrs` library is to expose small composable building blocks (primitives) for all components of the traditional particle engine.

Objects should be expressed as state changes over time. So a simple linear progression X
velocity particle would look like this:

    {
      x: 0,
      y: 0,
      xVel: 10,
      sum('x', 'xVel') // sum always folds from the left
    }
