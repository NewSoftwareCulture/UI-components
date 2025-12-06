import React from 'react';

import { Slider } from '../components';

export default {
  title: 'Example/Slider',
  component: Slider,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'light', value: '#eeeeee' },
        { name: 'gray', value: '#cccccc' },
        { name: 'dark', value: '#222222' },
        { name: 'black', value: '#000000' },
        { name: 'twitter', value: '#00aced' },
        { name: 'facebook', value: '#3b5998' },
        {
          name: 'image',
          value: 'url(https://images.pexels.com/photos/12079516/pexels-photo-12079516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=660)',
        },
      ],
    },
  },
};

const Template = (args) =>  <div style={{ 
  width: '100%',
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}}><Slider {...args} >{args.children}</Slider></div>;

export const Default = Template.bind({});
Default.args = {};

export const WithButton = Template.bind({});
WithButton.args = {
  slides: [
    {
      id: 1,
      title: "Title 1",
      description: "Description 1",
      color: "#4890d8",
      url: "https://google.com"
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
      color: "#333333"
    },
  ]
};

export const NoAutoplay = Template.bind({});
NoAutoplay.args = { 
  slides: [
    {
      id: 1,
      title: "Title 1",
      description: "Description 1",
      color: "#4890d8",
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
      color: "#333333"
    },
  ],
  autoplay: false
};

export const Fujifilm = Template.bind({});
Fujifilm.args = {
  slides: [
    {
      id: 1,
      title: "X Series",
      description: "Превосходное качество изображения в компактном корпусе",
      color: "#4890d8"
    },
    {
      id: 2,
      title: "GFX Series",
      description: "Среднеформатные камеры для профессионалов",
      color: "#333333"
    },
    {
      id: 3,
      title: "Instax Series",
      description: "Мгновенные воспоминания в ваших руках",
      color: "#991536"
    },
    {
      id: 4,
      title: "Lenses",
      description: "Высококачественные объективы для любого сценария",
      color: "#177345"
    },
    {
      id: 5,
      title: "Cinema Series",
      description: "Профессиональное кинематографическое оборудование",
      color: "#9a69ac"
    }
  ],
};

