import { camelCase } from 'lodash';

/*
    This will cause a parse failure if we tried to bundle our scripts with webpack as no loader is initially set up.

    In Webpack, a loader is a way to preprocess a file that isn't JS. In our case, we would need a scss-loader, but there
    are also various other styling loaders like css-loader, sass-loader, etc. 
    On top of that, there are loaders for linting and testing as well, plus loaders for TS, markdown, and templating, whatever that really is...
*/
import "./style.scss"; 

/* 
    Running this project in the broswer, though index.html (which imports index.js) would cause errors as the browser
    doesn't know how to resolve this lodash code/lodash imports.
    
    This is where Webpack can end up helping us. We first would need to install webpack as a dev dependency, as we dont need webpack in the browser. we just need
    to use it in our workspace to generate a proper bundle so the browser can comprehend what we're trying to do with lodash
    console.log(camelCase("hi"));

    Running Webpack after we've saved it as a dev dependency will output a new dist folder (pushing through static content from our /public dir)
    which will have all our other code bundled into one big file - that is JS files, third party libraries, etc. named main.js
*/
console.log(camelCase("hello"));