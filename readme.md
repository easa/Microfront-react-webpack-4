# Microfront sample with webpack@4

This is a sample 'monorepo' (also it can be use with multirepo) to demonstrate an microfrontend application
using Webpack v4, react, react-app-rewired and material-ui.  
Easy to use:
## cli: 

On root directory use these commands:  

1. `npm install` to install lerna (the repo manager)
1. `npm run bootstrap` this would install dependencies for all packages with the help of leran
1. `npm run build` this would build all projects
1. `npm run start` this would run project in development mode
1. `npm run publish` this would copy files to production folder
1. `npm run start:prod` this would run the application that were build at the previous step
1. `npm run clean` this would clean repository to a fresh start  


if dependencies didn't installed by bootstrap command (because of low node version) then use this:
1. `npm run init` this would run npm install on all packages


## what to do

- [x] install dependencies for all projects
- [x] add rewired configs
- [x] run the micro frontend project with configs
- [x] Show the component of the stock!
- [x] add the page for place order (simple one)
- [ ] add redux middleware`



## Requested:

| request | status | description |
| --- | --- | --- |
| Build run | done | run build on "/", run publish on "/", run start on "/output" |
| Messaging Hook | done | a simple package to communicate through projects |
| Auth hook | done | now the login (in another package) is integrated with the container |
| Theme Hook | idle |  |
