/* eslint-disable prefer-const */
import builders from './libs/webscript.modern.js'
// import processClasses from './libs/runcss.modern.js'
import createElements from './createElement.js'

let { div, body, p } = builders(createElements)

const app =
  div(
    p`cool man!!`
  )

document.body = body(app)
