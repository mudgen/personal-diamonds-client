import processClasses from './libs/runcss.modern.js'

function addChild (element, child) {
  if (
    typeof child === 'number' ||
      typeof child === 'bigint' ||
      child instanceof Date ||
      child instanceof RegExp
  ) {
    element.append(String(child))
  } else if (Array.isArray(child)) {
    for (const childChild of child) {
      addChild(element, childChild)
    }
  } else if (
    typeof child !== 'undefined' &&
      child !== null &&
      typeof child !== 'boolean'
  ) {
    element.append(child)
  }
}

function createElement (tagName, props, ...children) {
  tagName = tagName.toLowerCase()
  const element = document.createElement(tagName)
  for (const key in props) {
    const value = props[key]
    if (typeof value === 'string') {
      if (key === 'class') {
        processClasses(value)
      }
      element.setAttribute(key, value)
    } else {
      element[key] = value
    }
  }
  for (const child of children) {
    addChild(element, child)
  }
  return element
}

export default createElement
