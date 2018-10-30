# [Pennywise] Puzzle Pay Project Documentation

**Team Member**

* Dylan Ridings [dylan.bradshaw@live.com]
* Seamus Zhou [z.zhou@uq.net.au]
* Muhammad Rafi Rizky Ramdhani [m.ramdhani@uq.net.au ]
* Louis Alan [louischristoph.alan@gmail.com]

## Team Poster
![](https://i.imgur.com/1T44UB3.jpg)

## Team Flyer
![](https://i.imgur.com/F294IBd.jpg)

![](https://i.imgur.com/QGrUQm4.jpg)


# Prototype

## How to Use puzzle pay
### 1. Install Puzzle Pay on the chrome extension
Puzzle Pay is available to be downloaded from Chrome Web Store

 _The link to the the Chrome web store_: https://chrome.google.com/webstore/detail/puzzle-pay/gelfhbdlgbhbjgkoppmpmhnebmjnegen

_**FYI: The version in Google store is really old, we highly recommand you to install the plugin locally. New version will be published to Google store in the future.**_

### 2. Install Puzzle Pay on your local computer
### Install with source code or our CRX file
For Installing Puzzle pay in your Chrome broswer locally, we provided two way for you to install it.

#### Step 1. Clone the repository to your local
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

#### 1-1. Load Unpacked extension
Go to chrome://extensions/ and make sure you opened developer mode
![alt text](https://github.com/deco3500-2018/Pennywise/blob/master/Plugin/assets/Images/Screen%20Shot%202018-09-16%20at%2010.57.18%20am.png)


Click "Load Unpacked" to install the extension
![alt text](https://github.com/deco3500-2018/Pennywise/blob/master/Plugin/assets/Images/Screen%20Shot%202018-09-16%20at%2010.57.35%20am.png)

#### 1-2 Load packed extension by using CRX file
Go to chrome://extensions/ and make sure you opened developer mode
![alt text](https://github.com/deco3500-2018/Pennywise/blob/master/Plugin/assets/Images/Screen%20Shot%202018-09-16%20at%2010.57.18%20am.png)
Drag and Drop plugin.crx to the Broswer, It should install automaticlly

Tip: `CRX` is a google officla packed plugin file type.

### Step 2. Hosting the puzzle pay website locally
The website application is developed by React, for running the website locally you will need pull the 'Web' folder from Github first.
After pulled it, use `cd web` then `npm i` to install necessary node_modules.
After all node_modules installed, using `npm run server-dev` to running website in your localhost 3000 port.

The web application intergradted google login function, you will need add your google developer API (https://developers.google.com/identity/) key in the Web/raect-client/Components/Registe.jsx first

For using the web application's email function. You need add your personal email address and password in web/server/index.js
~~~~

let transporter = nodemailer.createTransport({
      service:"Gmail",
      auth:{
        user:'addyouremailaddress',
        pass:'addyouremailpwd'
      }
    })

~~~~



# Documentation

##  Project Summary
_Problem Space_
The problem space that we have choosen is developing a system that change's peoples behaviours towards impulsively spending. The reason we chose to focus on this problem space is because everybody has problems with spending money and there are numerous system that help people save money but none that work similarly to how we've developed ours. There are numerous budget and spend tracking applications but none of those stop you from spending at the moment of spending. Hence our problem space was to design a system that stopped people from impulsively spending money at the moment that they decided to do so.

_What Is Puzzle Pay?_
Puzzle Pay is a web-based browser extension that is aimed towards compulsive spenders. Puzzle Pay is designed to make the user reflects on their actions and behaviour of spending money unnecessarily with the help of other people. Puzzle Pay aims to modify the user behaviour in regards of compulsive spending, and motivate people to spend their money on important things. Puzzle Pay is different that other application as there are not many active application that is designed to stop impulsive spending the moment that the action is been performed. 
[Proposal](https://github.com/deco3500-2018/Pennywise/wiki/Proposal)

##  Design process
### Phase one: Defining Problem
Defining problem is the first step that we took to decide the domain space that we are going to be designing for. We noticed that there is a problem with human behaviour on the act of spending money impulsively. After a lengthy discussion, we decided to choose a theme of changing behaviour and focused on spending problem. We agreed that we wanted to develop a system that addressed those problems and tries to solve it
### Phase two: Brainstorming
After the theme has been chosen, we decided to brainstorm ideas throrough the domain. We wanted to design a product that would change the behaviour of the user on spending money. Firstly, we proposed a solution to develop a mobile-based tracking application that would track the live location of the user. If the user entered a shopping complex, the application would automatically boot up or show notification. Mainly, the idea was a game that would stop people from spending money by tracking their location and performing task. But, after a discussion with the tutor, we decided to change the idea as it was not suitable with mobile nor social definition.
### Phase three: Iteration
#### Research
We realized that we have not done the research about the problem space it self. In order to design a solution that would effectively address our domain, we performed initial research about impulsive spender to gather a general idea of what was currently available to those users. We found out that there are not many application that would try to prevent you to spend money online. There are numerous application that can track your spending, or budgeting application, but it does not address the problem that we proposed. Therefore, we performed more research to the areas of where we could develop, and agreed with the idea to develop a web-based plugin that aims to prevent user on spending money impulsively. Click the link below to see the data that we have gathered
* [Data Gathering Evidence](https://github.com/deco3500-2018/Pennywise/wiki/Survey-,Interview-and-Research)

#### Prototype & User Testing
_How is our design process development?_

With the basis of the research that we have conducted, we developed a web-based plugin called puzzle pay. A low-fidelity and high-fidelity prototypes are created alongside with the development process to test aspects that would be implemented in the final product. From the prototype, we conducted a user testing at each iteration of the prototype to generate insights that will be used as a research value for the next iteration. Click the link below to see the prototype iteration that we have conducted
* [Prototype Iteration 1](https://github.com/deco3500-2018/Pennywise/wiki/Prototype-Iteration-1)

* [Prototype Iteration 2](https://github.com/deco3500-2018/Pennywise/wiki/Prototype-Iteration-2)

* [Prototype Iteration 3](https://github.com/deco3500-2018/Pennywise/wiki/Prototype-Iteration-3)

## Development Process

_How is our development process of the prototype?_

We implemented the insights that have been generated from the user testings that we have conducted in the development of Puzzle Pay. Our project is a culmination of research and hard work that we hope would be able to help people address their problem of impulsive spending and help them change their behaviour before it caused unwanted and irrepairable damage to their life. Click the link below to see the dedicated WIKI page to our development process.
* [Development process](https://github.com/deco3500-2018/Pennywise/wiki/Develop-Progress-&-Code-Go-Through)

# Project Contributions
### Dylan Ridings [dylan.bradshaw@live.com]
* Led group discussions regarding development (Whiteboard discussions)
* Performed critical background research for the project (Interview and other surveys)
* Contributed to updating GIT
* Assisted in development of promotial material
* Setting up exhibition


### Seamus Zhou [z.zhou@uq.net.au]
* Developed the whole web application and extension
* Created first iteration high fidelity prototype
* Written Wiki pages related with code and design 
* Research for the project's domain
* Pitching and doing demonstrations during the exhibition
### Muhammad Rafi Rizky Ramdhani [m.ramdhani@uq.net.au ]
* Involves in group plan of work including survey material as well as workshops
* Responsible creating the Low-fidelity Prototypes
* Work on team promotional material 
* Working on updating GIT
* Setting up exhibition
* Responsible in conducting background research


### Louis Alan [louischristoph.alan@gmail.com]
* Creating plan of work
* Designed Low-fidelity and High-fidelity prototypes
* Conducted user testings for each prototype iteration
* Designed Informative Poster
* Modify Github WIKI and README
* Setting up exhibition



