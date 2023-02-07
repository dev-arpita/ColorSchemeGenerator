fetch("https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=6")
    .then(res => res.json())
    .then(data => {
    console.log(data.colors)
    for(let items in data.seed){
        console.log(items)
    // const renderClr = data.map(item => {
    //     return `
    //          <div class="box">${item.colors}</div>
    //     `
    // })
    }
    // document.getElementById("color-pattete").innerHTML=renderClr
})
