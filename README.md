
# renderedList
&ensp;&ensp;&ensp;&ensp;&ensp;![Image of Rl](https://image.ibb.co/cq09ES/RL.png)

<br/>[TEST IT NOW](https://nathanaelreges.github.io/renderedListPage/) <- click the link, open DevTools, toggle mobile view, reload the page and you are ready to play.
(Open the layers tab to see the module in action.)<br/><br/>

```javascript
const  module =  renderedList(arrayOfElements, {reverse})
```
<br/>**`arrayOfElements`** 
An array with all the elements that compose the list.  

<br/>**`reverse`**
Boolean, defaults to false. If true, the list is rendered like a chat window.

<br/>**`module.element`**
This property contains the renderedList element, wich you will append to the body.

<br/>**`module.appended({insideAnimationFrame})`**
 This method needs to be called as soon as you append the renderedList.ele. It will perform some measurements to put everything in place. If for some reason you are calling it inside an animation frame, signalize this by setting the parameter insideAnimationFrame to true.

<br/>**`module.removed()`**
It's very important to call this method after you remove the renderedList.ele from the DOM, it will disconnect the renderedList from the document.

<br/>**`module.addItemsToStart( arrayOfElements )`**
With this method you can add more items to the list.

<br/>**`module.addItemsToEnd( arrayOfElements )`** 
 With this method you can add more items to the list.

<br/>**`module.setInfiniteLoading( callback )`**
When the user approaches the end of the list, if Infinite Loading is set, more content will be inserted in the list, and the user can keep scrolling. To activate it call this method passing a callback. This callback must return a Promise to be resolved with an array containing the elements to be added to the list.

<br/>**`module.setPullUpdate( callback )`**
This method implements the famous pull to update action, all you need to do is pass it a callBack that must return a Promise to be resolved with an array containing the new Elements. When the user pulls the beginning of the page, the module will execute the callback function and append the new elements to the start.

<br/><br/>**Important:** 

&ensp;All the elements used in the list must have the same marginTop and can't have marginBottom.

&ensp;This module is meant to be used on mobile devices.

&ensp;Currently it doesn't support changes in screen size, so no screen rotation.

&ensp;Currently, re-appending the renderedList after it is removed, won't work as expected.
Currently it doesn't support changes in screen size, so no screen rotation.

Currently, re-appending the renderedList after it is removed, won't work as expected.
