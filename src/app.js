/* eslint-disable prefer-const */
import builders from './libs/webscript.modern.js'
// import processClasses from './libs/runcss.modern.js'
import createElements from './createElement.js'

let { div, body, p } = builders(createElements)

const app =
  div(
    p`cool man!! now???`,
    div
      .id`g_id_onload`
      .data·client_id`615157284989-q0rmkt4g9rfdinui6a6k5mua02tbknvk.apps.googleusercontent.com`
      .data·login_uri`https://personal.diamonds`
      .data·your_own_param_1_to_login`any_value`
      .data·your_own_param_2_to_login`any_value`
  )

document.body = body(app)
