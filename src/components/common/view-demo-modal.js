import React, { useContext } from 'react';
import { Formik, Field, Form } from 'formik';
import { ModalContext } from 'src/context/modal-context-provider';
import { CLOSE_ICON } from 'src/components/material-ui/icons';
import TextField from 'src/components/common/text-field';
import RoundedButton from 'src/components/material-ui/rounded-button';
import useI18n from 'src/hooks/use-i18n';

function ViewDemoModal() {
  const i18n = useI18n();
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
                        <div className='asset'>
                          <span class="iconify" data-icon="mdi:airport" data-inline="false"></span>
                        </div>
                        <h1>{i18n.t('viewDemoModal.title')}</h1>
                        <p>{i18n.t('viewDemoModal.description')}</p>
                        <Field name='email' label={i18n.t('viewDemoModal.emailField')} component={TextField} />
                        <RoundedButton
                          className='view-demo-modal-cta'
                          text={i18n.t('viewDemoModal.cta')}
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
