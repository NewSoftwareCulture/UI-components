import React from 'react';

import { PhotoSlider } from '../components';

export default {
  title: 'Example/PhotoSlider',
  component: PhotoSlider,
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
}}><PhotoSlider {...args} >{args.children}</PhotoSlider></div>;

export const Default = Template.bind({});
Default.args = {};

export const WithImages = Template.bind({});
WithImages.args = {
  images: [
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_device_img_01_01.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_device_img_01_02.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_device_img_02.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_device_img_03.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_device_img_05_01.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_device_img_05_02.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_device_img_06_01.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_device_img_06_02.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_device_img_07.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_device_img_08.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_device_img_09.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_device_img_10_01.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_device_img_10_02.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_device_img_11.png',
  ]
};

export const IsAutoplay = Template.bind({});
IsAutoplay.args = {
  images: [
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_quality_img_01_01.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_quality_img_01_02.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_quality_img_01_03.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_quality_img_01_04.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_quality_img_01_05.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_quality_img_01_06.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_quality_img_01_07.png',
    'https://www.fujifilm-x.com/products-cameras-static/x100vi/assets/images/top/sageabe_quality_img_01_08.png',
  ],
  autoplay: true
};
