const colorPallette = document.getElementById("color-pallette")
const seedColor = document.getElementById("seed-color").value
console.log(seedColor)
const colorPicker = document.getElementById("color-picker")
// const colorMode = ["Choose color", "Monochrom","Monochrome-dark", "Monochrome-light", "Analogic", "Complement", "Analogic-complement"]

// const renderColorOptions = ()=> {
//     const modes = colorMode.map(item => {
//      `
//      <form action="https://www.thecolorapi.com/scheme?hex=0047AB&mode=${item}&count=6" method="post">
//             <input type="color" class="seed-color" name="seed-color" id="seed-color">
//             <select class="color-list" name="choose-color" id="choose-color">
//                 <option value="0">Choose color</option>
//                 <option id="nonochrome" value="1"></option>
//                 <option id="monochrome-dark" value="2"></option>
//                 <option id="monochrome-light" value="3"></option>
//                 <option id="analogic" value="4"></option>
//                 <option id="complement" value="5">Complement</option>
//                 <option id="analogic-complement" value="6">Analogic-complement</option>
//             </select>

//             <input type="button" id="color-btn" value="Get color scheme">
//         </form>
//         `
//     })
// }
// function renderColorPallette() {
// fetch("https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=6")
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data.colors[0])
//         const myColors = data.colors
//      const renderColor = myColors.map(color => {
//             console.log(color.hex.value)

//             return `
//             <div class="color-box">
//               <div style="background: ${color.hex.value}" class="color"></div>
//               <div class="color-value">${color.hex.value}</div>
//             </div>
//             `
//         }).join("")
//         return colorPallette.innerHTML = renderColor
//      })
     fetch("https://www.thecolorapi.com/scheme?hex=BD6967&mode=analogic-complement&count=6")
    .then(res => res.json())
    .then(data => {
        // console.log(data.colors[0])
//         const myColors = data.colors
//      const renderColor = myColors.map(color => {
//             console.log(color.hex.value)

//             return `
//             <div class="color-box">
//               <div style="background: ${color.hex.value}" class="color"></div>
//               <div class="color-value">${color.hex.value}</div>
//             </div>
//             `
//         }).join("")
//         return colorPallette.innerHTML = renderColor
//      })
// //     }

// document.getElementById("color-btn").addEventListener("click", ()=>{

// })
// const monochrome = ()=> fetch("https://www.thecolorapi.com/scheme?hex=BD6967&mode=monochrome&count=6")
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data.colors[0])
//         const myColors = data.colors
//      const renderColor = myColors.map(color => {
//             console.log(color.hex.value)

//             return `
//             <div class="color-box">
//               <div style="background: ${color.hex.value}" class="color"></div>
//               <div class="color-value">${color.hex.value}</div>
//             </div>
//             `
//         }).join("")
//         return colorPallette.innerHTML = renderColor
// })

// const analogicComplement = ()=> fetch("https://www.thecolorapi.com/scheme?hex=BD6967&mode=analogic-complement&count=6")
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data.colors[0])
//         const myColors = data.colors
//      const renderColor = myColors.map(color => {
//             console.log(color.hex.value)

//             return `
//             <div class="color-box">
//               <div style="background: ${color.hex.value}" class="color"></div>
//               <div class="color-value">${color.hex.value}</div>
//             </div>
//             `
//         }).join("")
//         return colorPallette.innerHTML = renderColor
// })

// const complement = ()=> fetch("https://www.thecolorapi.com/scheme?hex=BD6967&mode=complement&count=6")
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data.colors[0])
//         const myColors = data.colors
//      const renderColor = myColors.map(color => {
//             console.log(color.hex.value)

//             return `
//             <div class="color-box">
//               <div style="background: ${color.hex.value}" class="color"></div>
//               <div class="color-value">${color.hex.value}</div>
//             </div>
//             `
//         }).join("")
//         console.log(renderColor)
//         return colorPallette.innerHTML = renderColor
// })

// const monochromeDark = ()=> fetch("https://www.thecolorapi.com/scheme?hex=BD6967&mode=monochrome-dark&count=6")
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data.colors[0])
//         const myColors = data.colors
//      const renderColor = myColors.map(color => {
//             console.log(color.hex.value)

//             return `
//             <div class="color-box">
//               <div style="background: ${color.hex.value}" class="color"></div>
//               <div class="color-value">${color.hex.value}</div>
//             </div>
//             `
//         }).join("")
//         return colorPallette.innerHTML = renderColor
// })

// const monochromeLight = ()=> fetch("https://www.thecolorapi.com/scheme?hex=BD6967&mode=monochrome-light&count=6")
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data.colors[0])
//         const myColors = data.colors
//      const renderColor = myColors.map(color => {
//             console.log(color.hex.value)

//             return `
//             <div class="color-box">
//               <div style="background: ${color.hex.value}" class="color"></div>
//               <div class="color-value">${color.hex.value}</div>
//             </div>
//             `
//         }).join("")
//         return colorPallette.innerHTML = renderColor
// })
