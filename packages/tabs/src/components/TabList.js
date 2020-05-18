// import { cloneVNodeElement } from './utils/vnode'

const TabList = {
  name: 'TabList',
  render(createElement) {
    // Add magic indexes to each <Tab> component
    this.$slots.default.forEach((node, index) => {
      node.componentOptions.propsData.index = index
    })

    return createElement('div', this.$slots.default)
  },
  inject: ['tabOrientation'],
}

export default TabList
