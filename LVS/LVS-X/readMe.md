Set-up
1) run "npm install"
2) If there are multiple variations, be sure to add them to the "entry" object in webpack.config.js
3) When ready, run "npm run build" which will start webpack. Webpack will automatically compile on save.
4) Style sheets are exported as separate files, 
however you must include them in your js with "import styles from './styles/v1.scss'" for webpack to find them.

Other Notes:
- Feel free to modify webpack.config as needed (e.g. more variations, styles need to be part of js, no minified js)
- .gitignore file included with my preferences, modify or delete as you like
- same for my utils file, just some functions I use a lot. Modify or delete as you like


FOR LIVE UPDATING  
Download the following chrome extension and app:  
- User JavaScript and CSS (this will automatically inject JS and CSS into a webpage)  
- Web Server for Chrome (this will very quickly set up a local server to host your files)  

When you are ready to begin testing, launch the Web Server app from chrome and choose the root folder for your test.  
Then, navigate to the test page and add a new JS/CSS rule with the User JavaScript and CSS extension.  
Add the following JavaScript as a rule. Be sure the change the variation variable when testing multiple variations.  
Double check that the URL and port are correct in the "dir" variable.  

```
// CHANGE VARIATION NUMBER HERE
const variation = '1';



const dir = 'http://127.0.0.1:8887/dist';
// Add in CSS
const cssTag = document.createElement('link');
cssTag.rel = 'stylesheet';
cssTag.type = 'text/css';
cssTag.href = `${dir}/v${variation}.bundle.css`;
document.head.appendChild(cssTag);
// Add in Javascript
const scriptTag = document.createElement('script');
scriptTag.type = 'text/javascript';
scriptTag.src = `${dir}/v${variation}.bundle.js`;
document.head.appendChild(scriptTag);
```