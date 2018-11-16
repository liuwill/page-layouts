import { shallowMount } from '@vue/test-utils'
import Landing from '@/components/Landing.vue'
import { expect, assert } from 'chai'

describe('Landing.vue', () => {
  it('renders landing', () => {
    const items = ['', '']
    const wrapper = shallowMount(Landing, {
      propsData: { items }
    })

    expect(wrapper.findAll('.landing').length).to.be.equal(1)
    // expect(wrapper.findAll('li')).toHaveLength(items.length)
  })
})
