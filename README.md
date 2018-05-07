# renderedList
![Image of Rl](https://image.ibb.co/cq09ES/RL.png)

<br/>const  **module**&ensp; = &ensp; renderedList(&ensp;**arrayOfElements**,&ensp;{&ensp;**reverse**&ensp;}&ensp;)<br/>

**arrayOfElements** &ensp; An array with all the elements that compose the list.  
**reverse** &ensp; Boolean, defaults to false. If true, the list is rendered like a chat window.

<br/><br/>**module.element**&ensp; This property contains the renderedList element, wich you will append to the body.

<br/>**module.appended(**&ensp;{&ensp;**insideAnimationFrame**&ensp;}&ensp;**)** &ensp; This method needs to be called as soon as you append the renderedList.ele. It will perform some measurements to put everything in place. If for some reason you are calling it inside an animation frame, signalize this by setting the parameter insideAnimationFrame to true.

<br/>**module.removed()** &ensp; If you need to remove the renderedList and move on to another view on your SPA, it's important to call this method after you remove the renderedList.ele, because it will end any bindings from the document.

<br/>**module.addItemsToStart(&ensp;arrayOfElements&ensp;)** &ensp; With this method you can add more items to the list.

<br/>**module.addItemsToEnd(&ensp;arrayOfElements&ensp;)** &ensp; With this method you can add more items to the list.

<br/>**module.setInfiniteLoading(&ensp;callback&ensp;)**&ensp; When the user approaches the end of the list, if Infinite Loading is set, more content will be inserted in the list, and the user can keep scrolling. To activate it call this method passing a callback. This callback must return a Promise to be resolved with an array containing the elements to be added to the list.

<br/>**module.setPullUpdate(&ensp;callback&ensp;)**&ensp; This method implements the famous pull to update action, all you need to do is pass it a callBack that must return a Promise to be resolved with an array containing the new Elements. When the user pulls the beginning of the page, the module will execute the callback function and append the new elements to the start.

<br/><br/>**Important:** 

All the elements used in the list must have the same marginTop and can't have marginBottom.

This module is meant to be used on mobile devices.

Currently it doesn't support changes to the size of the screen, so no screen rotation.
