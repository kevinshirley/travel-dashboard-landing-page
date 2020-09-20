import React, { useContext } from 'react';
import { Formik, Field, Form } from 'formik';
import { ModalContext } from 'src/context/modal-context-provider';
import { CLOSE_ICON } from 'src/components/material-ui/icons';
import TextField from 'src/components/common/text-field';
import RoundedButton from 'src/components/material-ui/rounded-button';

function ViewDemoModal() {
  const [isModalOpen, setIsModalOpen] = useContext(ModalContext);

  return (
    <>
      {isModalOpen && (
        <div className='container modal-container'>
          <div className='modal-wrapper'>
            <div className='modal-inner'>
              <div className='header'>
                <div className='close'>
                  <button onClick={() => setIsModalOpen(false)}>{CLOSE_ICON}</button>
                </div>
              </div>
              <div className='view-demo-modal'>
                <Formik
                  initialValues={{
                    email: '',
                    confirmEmail: '',
                  }}
                  onSubmit={async values => {
                    try {
                      console.log('submitting email from view demo modal', values);
                    } catch (err) {
                      console.log('error from view demo modal');
                    }
                  }}
                >
                  {() => (
                    <Form>
                      <div className='inner'>
                        <h1>Try Trip Imagine for free</h1>
                        <p>Please enter your email to head over to the demo</p>
                        <Field name='email' label='Email' component={TextField} />
                        <Field name='confirmEmail' label='Confirm Email' component={TextField} />
                        <RoundedButton
                          className='add-trip-cta'
                          text='Done'
                          type='submit'
                        />
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ViewDemoModal;
