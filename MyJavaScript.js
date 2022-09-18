

// var plc = document.getElementById('demo')
// out = "";
// var btn = document.getElementById('btn')

// function bringAPIData(){

//     const obj = {name: 'Munaem', lastnaem: 'Azizi'. Job: 'IT Officer'}

// }


// =======================================JSON Stringify==============================================

// var plc = document.getElementById('demo')
// out = "";

// function bringAPIData(){

//     const obj = {name: 'Sony', model: 'Sony 2001', Price: '16000'}
//     const itemsSt = JSON.stringify(items);

//     localStorage.setItem("testData", itemsSt)


//     const itemsText = localStorage.getItem('testData')
//     console.log(itemsTextJson)
//     var itemsTextJson = JSON.parse(itemsText)
//     console.log(itemsTextJson)

//     for(let key in itemsTextJson){
//         console.log(log +":"+itemsTextJson[key])
//         out += key + itemsTextJson[key] +"<br>";
//         plc.innerHTML=out
//     }
//  }



// ==============================AJAX====================================================================

function bringAPIData(){
    const ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'myMessage.text')
    
}