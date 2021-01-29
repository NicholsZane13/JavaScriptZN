/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript 
DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/

(function html() {
    let scrt_var = 10;
    let strLink = "https://codepen.io/ayunas-the-scripter/pen/WNQgpqB" + scrt_var;
    document.getElementById("inject").setAttribute("id",strLink);
})();
