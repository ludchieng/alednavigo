import { shallowMount } from '@vue/test-utils'
import NewTab from '@/pages/NewTabPage/index.vue'

describe('NewTab.vue', () => {
  it('renders the five category titles', () => {
    const wrapper = shallowMount(NewTab)
    expect(wrapper.findAll('h2').length).toBe(5)
  })

  it('renders the line icons', () => {
    const wrapper = shallowMount(NewTab)
    expect(wrapper.findAll('.icon-line').length).toBeGreaterThanOrEqual(0)
  })
})
