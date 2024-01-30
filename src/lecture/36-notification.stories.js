import { Plant } from './36-notification';

const storyMeta = {
  title: 'component/Plant',
  component: Plant,
  tags: ['autodocs'],
  args: {
    theme: 'plant',
    color: '#22BE61',
    title: '화초 관리',
    time: '6분',
    text: '화초에 물을 줄 시간입니다.',
  },
};

export default storyMeta;

export const Default = {};
Default.storyName = '화초 관리';

export const Food = {
  args: {
    theme: 'food',
    color: '#E39042',
    title: '아이 식사',
    time: '지금',
    text: '아이에게 식사를 차려줄 시간입니다.',
  },
};

Food.storyName = '아이 식사';
