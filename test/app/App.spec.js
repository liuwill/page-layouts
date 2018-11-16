import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'
import { expect, assert } from 'chai'

import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('App.vue', () => {
  it('renders app', () => {
    const items = ['', '']
    const wrapper = shallowMount(App, {
      propsData: { items },
      localVue,
    })

    expect(wrapper.findAll('.page').length).to.be.equal(1)
    // expect(wrapper.findAll('li')).toHaveLength(items.length)
  })
})
