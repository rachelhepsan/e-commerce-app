import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import InputComp from '@/components/InputComp/InputComp.vue';

describe('InputComp', () => {
  it('renders properly', () => {
    const wrapper = mount(InputComp, { props: { label: 'Input Label' } });
    expect(wrapper.text()).toContain('Input Label');
  });
});
