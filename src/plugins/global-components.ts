import { App, defineComponent  } from 'vue'

export const register = (app: App<Element>): void => {
  // Grab all components in `/src/lib/components/` that start with "Base"
  const components = import.meta.globEager('../components/Base/*.vue')
  Object.entries(components).forEach(([path, component]) => {
    // Just get the file name itself, remove the .vue extension, and remove the "Base" at the front of the file name
    const pathSplit = path.split('/')
    const fileName = pathSplit[pathSplit.length - 1].split('.vue')[0]

    // Convert to kebab-case and register with a "jvp-" prefix
    const kebab = fileName.replace(/([a-z0–9])([A-Z])/g, '$1-$2').toLowerCase()
    app.component(`vcn-${kebab}`,  defineComponent(component.default))
  })
}