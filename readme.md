js tools
========

A quick test of the awesome new tools for front-end development. Learning is the goal, so the plan is this:

 * Exactly one commit for each tool added to the project. If the change requires multiple steps, branch, make the minimum number of commits necessary, and merge with `--no-ff` so that it is easy to identify as one step in the history.

 * Add the minimum configuration and changes to make it work nicely with what is already here.

 * Write a detailed commit message explaining anything notable about the required changes. Please include links to external resources.

 * Expand on notable but context-specific changes by adding a comment to the affected lines on github.


When everything is together, the repository should act as a solid reference for the set-up of the chosen tools.


Installing
==========


Runtimes
--------

### [node](http://nodejs.org/)

Node is required for `Bower`, and to use `r.js` to build the javascript app from RequireJS.


Tools
-----

### [Bower](http://bower.io)

Bower is used to install other front-end dependencies, so that they need not be tracked in the project source.

```bash
$ sudo npm install -g bower
```


Dependencies
------------

Once you have bower installed, all project dependencies can be installed with it. Just run the following from the root of the project

```bash
$ bower install
```
