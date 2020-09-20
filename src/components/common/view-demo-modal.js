import React, { useContext } from 'react';
import { ModalContext } from 'src/context/modal-context-provider';

function ViewDemoModal() {
  const [isModalOpen, setIsModalOpen] = useContext(ModalContext);
  console.log({ isModalOpen });
  return (
    <>
      {isModalOpen && (
        <div className='container modal-container'>
          <div className='modal-wrapper'>
            <div className='modal-inner'>
              <div className='header'>
                <div className='close'>
                  <button onClick={() => console.log('close modal')}>X</button>
                </div>
              </div>
              view demo modal
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ViewDemoModal;
