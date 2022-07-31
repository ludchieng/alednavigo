import { shallowMount } from '@vue/test-utils'
import NewTab from '@/pages/NewTabPage/index.vue'

describe('NewTab.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(NewTab, {
      propsData: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
