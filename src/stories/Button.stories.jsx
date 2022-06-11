import React from 'react';

import { Button } from '../components';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
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
          value: 'url(background.jpeg) fixed no-repeat center',
        },
      ],
    },
  },
};

const Template = (args) => <div style={{ 
  width: '100vw',
  height: '100vh',
  display: 'inline-grid',
}}>{Object.values(args).map((arg) => <div style={{
  width: '100vw',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'inline-flex',
}}><Button {...arg}>{arg.children}</Button></div>)}</div>;


export const Default = Template.bind({});
Default.args = [{}];

export const ButtonTitle = Template.bind({});
ButtonTitle.args = [
  {
    children: 'Title Button'
  }
];

export const ButtonSizes = Template.bind({});
ButtonSizes.args = [
  {
    className: 'sm',
    children: 'Small size'
  },
  {
    className: '',
    children: 'Default size'
  },
  {
    className: 'lg',
    children: 'Long size'
  }
];

export const ButtonTextColor = Template.bind({});
ButtonTextColor.args = [
  {
    className: 'text-primary bg-glass',
    children: 'Primary'
  },
  {
    className: 'text-primary',
    children: 'Primary'
  },
  {
    className: 'text-secondary',
    children: 'Secondary'
  },
  {
    className: 'text-success',
    children: 'Success'
  },
  {
    className: 'text-warning',
    children: 'Warning'
  },
  {
    className: 'text-danger',
    children: 'Danger'
  },
  {
    className: 'text-info',
    children: 'Info'
  },
  {
    className: 'text-dark',
    children: 'Dark'
  },
];

export const ButtonBgColor = Template.bind({});
ButtonBgColor.args = [
  {
    className: 'bg-glass',
    children: 'Background Glass'
  },
  {
    className: 'bg-primary',
    children: 'Background Primary'
  },
  {
    className: 'bg-secondary',
    children: 'Background Secondary'
  },
  {
    className: 'bg-success',
    children: 'Background Success'
  },
  {
    className: 'bg-warning',
    children: 'Background Warning'
  },
  {
    className: 'bg-danger',
    children: 'Background Danger'
  },
  {
    className: 'bg-info',
    children: 'Background Info'
  },
  {
    className: 'bg-dark',
    children: 'Background Dark'
  },
  {
    className: 'bg-telegram',
    children: 'Background Telegram'
  },
];

export const ButtonCustomStyles = Template.bind({});
ButtonCustomStyles.args = [
  {
    styles: {
      width: 50,
      height: 50,
      borderRadius: 50,
      fontSize: '10px'
    },
    children: 'Some title',
  }
];

export const ButtonAdd = Template.bind({});
ButtonAdd.args = [
  {
    styles: {
      width: 25,
      height: 25,
      borderRadius: 25,
    },
    handleClick: () => alert('Add click!'),
    children: '+'
  }
];

export const ButtonIcon = Template.bind({});
ButtonIcon.args = [
  {
    styles: {
      width: 100,
      height: 100,
      borderRadius: 100,
    },
    className: 'text-success',
    children: <img src='code-brackets.svg' alt='</>'/>
  }
];

