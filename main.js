
const initRenderedList = _['renderedList/renderedList.js']



//prevent ScrollRestoration routine
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
//




const arrayOfElements

const renderedList = initRenderedList(arrayOfElements)

renderedList.setPullUpdate(()=>{
    return new Promise(resolve =>{
        //your code
        resolve(arrayOfNewElements)
    })
})

renderedList.setInfiniteLoading(()=>{
    return new Promise(resolve =>{
        //your code
        resolve(arrayOfMoreElements)
    })
})





document.body.appendChild(renderedList.ele)

renderedList.appended()
 
