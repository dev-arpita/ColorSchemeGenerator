const colorPallette = document.getElementById("color-pallette")
const seedColor = document.getElementById("seed-color")
const colorPicker = document.getElementById("color-picker")
const colorMode= document.getElementById("color-mode")

function renderColor() {
  const hex = seedColor.value.slice(1,7)
  const mode = colorMode.value
  fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=6`)
    .then(res => res.json())
    .then(data => {
      const renderColor = data.colors.map(color => {
              return `
              <div class="color-box flex flex-col">
                <div style="background: ${color.hex.value}" class="color flex">${color.name.value}</div>
                <div class="color-value">${color.hex.value}</div>
              </div>
              `
          }).join("")
   colorPallette.innerHTML = renderColor
  })
}

document.getElementById("color-btn").addEventListener("click", renderColor)
