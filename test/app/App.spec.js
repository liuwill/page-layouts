import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import { expect, assert } from 'chai'

console.log('=++++')
describe('App.vue', () => {
  it('renders app', () => {
    const items = ['', '']
    const wrapper = shallowMount(App, {
      propsData: { items }
    })

    expect(wrapper.findAll('.app').length).to.be.equal(1)
    // expect(wrapper.findAll('li')).toHaveLength(items.length)
  })
})
