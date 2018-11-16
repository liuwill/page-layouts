import { shallowMount } from '@vue/test-utils'
import Article from '@/components/Article.vue'
import { expect, assert } from 'chai'

describe('Article.vue', () => {
  it('renders article', () => {
    const items = ['', '']
    const wrapper = shallowMount(Article, {
      propsData: { items }
    })

    expect(wrapper.findAll('.app').length).to.be.equal(1)
  })
})
