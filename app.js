'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = document.boby.className;
    if(className == "light-theme"){
        this.textConent = "Dark";
    }
    else{
        this.textConent = "light";
    }
    console.log('current class name: ' + className);
}
);