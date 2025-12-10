import React, { useState } from 'react';


import { Modal } from '../components';

export default {
  title: 'Example/Modal',
  component: Modal,
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



const Template = (args) => { 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return <div style={{ 
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <button className="open-modal-btn" onClick={openModal}>
      Открыть
    </button>


    <Modal 
      isOpen={isModalOpen} 
      onClose={closeModal}
      title="Пример модального окна"
    >
      <div className="modal-content-example">
        <p>Содержимое модального окна.</p>
        <div className="modal-actions">
          <button className="btn btn-primary" onClick={closeModal}>
            Подтвердить
          </button>
          <button className="btn btn-secondary" onClick={closeModal}>
            Отмена
          </button>
        </div>
      </div>
    </Modal>
  </div>
}

export const Default = Template.bind({});
Default.args = {};

