# Project Documentation
[Proposal](https://github.com/deco3500-2018/Pennywise/wiki/Proposal)

[Design process](https://github.com/deco3500-2018/Pennywise/wiki/Design-process)

[Survey and Interview](https://github.com/deco3500-2018/Pennywise/wiki/Survey-and-Interview)


# How to Use puzzle pay
## Download from Chrome Web Store
The extenson is released in Google web store

https://chrome.google.com/webstore/detail/puzzle-pay/gelfhbdlgbhbjgkoppmpmhnebmjnegen

## Install with source code
### 1. Clone the repository to your local
SSH Clone:
~~~~
git@github.com:deco3500-2018/Pennywise.git
~~~~

HTTP Clone:
~~~~
https://github.com/deco3500-2018/Pennywise.git
~~~~

After sucessfuly clone, you will get a folder with file structure like this

![alt text](https://github.com/deco3500-2018/Pennywise/blob/master/Plugin/assets/Images/Screen%20Shot%202018-09-16%20at%2010.36.43%20am.png)

### 2. Open Developer mode in Chrome and Install the extension
Go to chrome://extensions/ and make sure you opened developer mode
![alt text](https://github.com/deco3500-2018/Pennywise/blob/master/Plugin/assets/Images/Screen%20Shot%202018-09-16%20at%2010.57.18%20am.png)


Click "Load Unpacked" to install the extension
![alt text](https://github.com/deco3500-2018/Pennywise/blob/master/Plugin/assets/Images/Screen%20Shot%202018-09-16%20at%2010.57.35%20am.png)

### 3. Hosting the puzzle pay website locally
The website is develope by react.js, for running the website locally you will need pull the 'Web' folder from Github first.
After pulled it, use `cd web` then `npm i` to install necessary node_modules.
After all node_modules installed, using `npm run server-dev` to running website in your localhost 3000 port.

The website intergradted google login function, you will need add your google developer API (https://developers.google.com/identity/) key in the Web/raect-client/Components/Registe.jsx first
