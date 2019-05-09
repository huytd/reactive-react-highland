# Reactive React

This is a PoC for applying Reactive Programming with React functional component.

For the overview, we have a simple React component like this:

    <App />
      |- <MouseTracker />
      
And a mouse event stream created with `highland.js`, it transform the `mousemove` event into a stream of mouse position.

In `<App/>` component, we subscribe to that stream, for every event, we update the `<MouseTracker/>` component with a new position data.
