import { shallowMount } from '@vue/test-utils';
import { ComponentWrapper } from '../supportTypes';
import RoutingTabs from '@/components/RoutingTabs.vue';
import type { Route } from 'vue-router';

let wrapper: ComponentWrapper;

const initializeComponent = ({ routes }: { routes: Partial<Route>[] }) => {
  wrapper = shallowMount(RoutingTabs, {
    stubs: {
      'v-tabs': true,
      'v-tab': {
        name: 'VTab',
        props: ['to'],
        template: '<div><slot/></div>',
      }
    },
    mocks: {
      $router: {
        options: {
          routes
        }
      }
    }
  });
};

beforeEach(() => 
  initializeComponent({
    routes: [{ name: 'a', path: '/a' }, { name: 'b', path: '/b' }],
  }),
);

it('renders route names', () => {
  expect(wrapper.text()).toMatch('ab')
});

it('renders tabs with correct links', () => {
  const tabs = wrapper.findAllComponents({ name: 'VTab' });
  const links = ['/a', '/b'];
  expect(
    // check if all links could be found in the DOM
    tabs.filter((tab) => links.includes(tab.props('to'))).length
  ).toBe(links.length);
});
