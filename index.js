const colorPallette = document.getElementById("color-pallette")
const seedColor = document.getElementById("seed-color").value
console.log(seedColor)
const colorPicker = document.getElementById("color-picker")
const colorMode= document.getElementById("color-mode").value
const codeIdStore = []
console.log(colorMode)
function renderColor() {
  const hex = seedColor.slice(1,7)
  console.log("hex",hex)
  const mode = colorMode
  fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=6`)
    .then(res => res.json())
    .then(data => {
      console.log("data",data)
      const myColors = data.colors
      const renderColor = myColors.map(color => {
              console.log(color.hex.value)
              console.log(color.name.value)
              return `
              <div class="color-box">
                <div style="background: ${color.hex.value}" class="color">${color.name.value}</div>
                <div class="color-value">${color.hex.value}</div>
              </div>
              `
          }).join("")
   colorPallette.innerHTML = renderColor
    codeIdStore.push(data.color.hex.value)
    console.log(codeIdStore)
  })
   colorPallette.innerHTML = ""
}

document.getElementById("color-btn").addEventListener("click", renderColor)
