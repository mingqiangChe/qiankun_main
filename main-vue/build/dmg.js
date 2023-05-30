const dmg = require("dmg-builder")
// 未生效
const path = require("path")

dmg({
  appPath: path.join(__dirname, "../dist/website"),

  name: "My App",

  icon: path.join(__dirname, "../dist/img/myself.cab69cfc.jpg"),

  out: path.join(__dirname, "../dist/my-app.dmg"),
})
  .then(() => {
    console.log("DMG created successfully!")
  })
  .catch((error) => {
    console.error(error)
  })
