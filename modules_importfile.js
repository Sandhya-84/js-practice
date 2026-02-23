import {PI,add,subtract} from './modules_exportfile.js';
import greet from './modules_exportfile.js';
console.log(PI);
console.log(add(5,10));
console.log(subtract(10,5));
console.log(greet("Sandhya"));  //default functions

//if we want to import all the exports from a module, we can use the * syntax and give it an alias.
import * as math from './modules_exportfile.js';
console.log(math.PI);
console.log(math.add(5,10));
console.log(math.subtract(10,5));

//renaming while importing
import {add as sum } from './modules_exportfile.js';
console.log(sum(5,10)); // 15

//importing modules in html
/*<script type="module" src="main.js"></script>
In this case, main.js can import other modules using the import statement. The type="module" attribute tells the browser to treat the script as a module, allowing you to use import and export statements within it.
*/

// type="module" is necessary when using modules in the browser, as it enables the use of import and export statements. Without it, the browser will not recognize the script as a module and will throw an error when you try to use import or export.

// there are only two main keywords
/*export → send code out
import → bring code in

🎯 Why modules are powerful

Modules enable:

React apps

Node backend

Large projects

Clean architecture

Every modern JS project uses modules.
*/

