##PresentWeb

####Construct a nice web slides presentation by modify the source of the impress.js.
####Get the original impress.js source on [impress.js](https://github.com/bartaz/impress.js)
####Get the Markdown support for the work of [showdown.js](https://github.com/showdownjs/showdown)
####Get the highlight support for the work of 
>* [highlight.js themes](https://highlightjs.org/)
>* [highlight.js source](https://github.com/isagalaev/highlight.js)

####Feature:
* Markdown Support Now, but it is not mature, so a lot of work still have to be done, but for normal use, you should write these codes:

```html
	<div id="from-markdown"></div>
    <div id="markdown" style="visibility:hidden">
    	Your Markdown Code Here...
     </div>
```
* Being able to create the project folder using the file present
>Instructions
>* Download the master.zip file or using git clone ``git clone https://github.com/seanchain/PresentWeb``
>* Unzip the compressed file or just open the cloned folder and drag the ``present`` file to ``/usr/bin`` folder
>* using the command line tools like ``Terminal`` to run script ``present new YOUR_PROJECT_NAME`` to create a working directory with css files and JavaScript files


P.S. 
>* I would appreciate a lot for the help of the ``impress.js``, ``showdown.js`` and ``highlight.js`` ^_^
>* Make sure Your computer can run a ruby enviornment and the interpreter is in the path ``/usr/bin/ruby``
>* Windows not support the command tools for some reasons
