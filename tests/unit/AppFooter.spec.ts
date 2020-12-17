import { shallowMount } from '@vue/test-utils';
import { ComponentWrapper } from '../supportTypes';
import AppFooter from '@/components/AppFooter.vue';

let wrapper: ComponentWrapper;

const initializeComponent = () => {
  wrapper = shallowMount(AppFooter, {
    stubs: {
      'v-footer': true,
      'v-row': true,
      'v-col': true,
      'v-btn': {
        name: 'VBtn',
        template: '<a><slot /></a>',
      },
      'v-icon': true,
    },
  });
};

beforeEach(() => initializeComponent());

it('renders current year', () => {
  expect(wrapper.text()).toMatch(new Date().getFullYear().toString());
});

it('v-btn should point to frsource.org', () => {
  expect(wrapper.getComponent({ name: 'VBtn' }).attributes('href')).toBe('https://www.frsource.org/');
});
