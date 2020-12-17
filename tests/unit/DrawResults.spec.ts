import { shallowMount, WrapperArray } from '@vue/test-utils';
import { ComponentWrapper } from '../supportTypes';
import DrawResults from '@/components/DrawResults.vue';
import DrawHeading from '@/components/DrawHeading.vue';
import DrawnBall from '@/components/DrawnBall.vue';

const type = 'eurojackpot';
const date = 'Dec 18 2020';
const data = [{
  jackpot: '20000',
  date: 'date',
  numbers: ['0', '1', '2'],
},{
  jackpot: '100',
  date: 'date2',
  numbers: ['3', '4'],
}];
let wrapper: ComponentWrapper;

const initializeComponent = (
  {
    isLoading = 0,
    result = {data, error: void 0},
    propsData = { type, date }
  }: {
    isLoading?: number;
    result?: {
      data?: { jackpot: string; date: string; numbers: string[] }[];
      error?: string;
    };
    propsData?: { type: string; date: string };
  } = {}
) => {
  wrapper = shallowMount(DrawResults, {
    propsData,
    stubs: {
      'v-card': {
        name: 'VCard',
        template: '<section><slot /></section>',
      },
      'v-card-title': true,
      'v-card-text': true,
      'v-alert': {
        name: 'VAlert',
        template: '<div><slot /></div>',
      },
      ApolloQuery: {
        name: 'ApolloQuery',
        props: ['update', 'variables', 'tag', 'query'],
        template: '<div><slot :result="result" isLoading="isLoading" /></div>',
        data: () => ({
          isLoading,
          result,
        }),
      },
    },
  });
};

describe('when query data is loaded', () => {
  let cards: WrapperArray<Vue>;
  beforeEach(() => {
    initializeComponent();
    cards = wrapper.findAllComponents({ name: 'VCard' })
  });

  it('should render correct number of cards & pass false as a loading prop', () => {
    expect(cards.length).toBe(data.length);
    expect(cards.at(0).props('loading')).toBeFalsy();
    expect(cards.at(1).props('loading')).toBeFalsy();
  });

  it('should pass parsed jackpot to DrawHeading component', () => {
    expect(cards.at(0).findComponent(DrawHeading).props('jackpot')).toBe(20000);
    expect(cards.at(1).findComponent(DrawHeading).props('jackpot')).toBe(100);
  });

  it('should render number balls with correct numbers', () => {
    const component0Balls = cards.at(0).findAllComponents(DrawnBall);
    const component1Balls = cards.at(1).findAllComponents(DrawnBall);
    expect(component0Balls.wrappers.map(w => w.props('number'))).toEqual([0, 1, 2]);
    expect(component1Balls.wrappers.map(w => w.props('number'))).toEqual([3, 4]);
  });
});

describe('when request errors', () => {
  const error = 'some Error';
  beforeEach(() => initializeComponent({result: { error }}));

  it('should render only an alert with message', () => {
    expect(wrapper.text()).toBe(error);
    expect(wrapper.findComponent({ name: 'VCard' }).exists()).toBeFalsy();
    expect(wrapper.findComponent(DrawHeading).exists()).toBeFalsy();
    expect(wrapper.findComponent(DrawnBall).exists()).toBeFalsy();
  });
});
