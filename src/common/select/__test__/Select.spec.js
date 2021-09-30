import {
  mount
} from '@vue/test-utils';
import SmSelect from '../Select.vue';
import Select from '../index';

describe('Select.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = null;
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.destroy();
    }
  })

  it('render default correctly', () => {
    wrapper = mount(SmSelect);
  })

  it('render index correctly', () => {
    wrapper = mount(Select)
    expect(wrapper.find('.sm-component-select').exists()).toBe(true);
  })
})