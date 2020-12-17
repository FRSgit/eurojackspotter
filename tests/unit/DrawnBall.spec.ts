import { shallowMount } from '@vue/test-utils';
import { ComponentWrapper } from '../supportTypes';
import DrawnBall from '@/components/DrawnBall.vue';

let wrapper: ComponentWrapper;

const initializeComponent = (number: number) => {
  wrapper = shallowMount(DrawnBall, {
    propsData: { number },
    stubs: {
      'v-avatar': {
        name: 'VAvatar',
        template: '<span><slot/></span>',
        props: ['color']
      }
    }
  });
}

it('renders a number', () => {
  initializeComponent(5);
  expect(wrapper.text()).toBe('5')
});

it('generates color for a number', () => {
  initializeComponent(4);
  const color = wrapper.findComponent({ name: 'VAvatar' }).props('color');
  expect(color).toStrictEqual(expect.any(String));
});
