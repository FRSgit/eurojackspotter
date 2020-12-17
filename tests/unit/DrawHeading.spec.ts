import { shallowMount } from '@vue/test-utils';
import { ComponentWrapper } from '../supportTypes';
import DrawHeading from '@/components/DrawHeading.vue';

let wrapper: ComponentWrapper;

const initializeComponent = ({ jackpot, mobile = false }: { jackpot: number; mobile?: boolean }) => {
  wrapper = shallowMount(DrawHeading, {
    propsData: { jackpot },
    stubs: {
      'v-col': true,
      'v-row': true,
      'v-icon': true
    },
    mocks: {
      $vuetify: {
        breakpoint: { mobile }
      }
    }
  });
}

it('renders content with correct number', () => {
  initializeComponent({ jackpot: 5000000 });
  expect(wrapper.text()).toMatch('5000000 €')
});

describe('when displayed on mobile', () => {
  const jackpot = 2000000;
  beforeEach(() => initializeComponent({ jackpot, mobile: true }));

  it('should display jackpot in the shorthand format', () => {
    expect(wrapper.text()).toMatch('2 Mill.  €')
  });
});
