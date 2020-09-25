import React, { useContext, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { ModalContext } from 'src/store/context/modal-context-provider';
import { CLOSE_ICON } from 'src/components/material-ui/icons';
import TextField from 'src/components/common/text-field';
import RoundedButton from 'src/components/material-ui/rounded-button';
import useI18n from 'src/hooks/use-i18n';
import { axiosPost } from 'src/utils/fetch';
import { useToasts } from 'react-toast-notifications';

function ViewDemoModal() {
  const i18n = useI18n();
  const [isModalOpen, setIsModalOpen] = useContext(ModalContext);
  const [isRequestSuccess, setIsRequestSuccess] = useState(false);
  const { addToast } = useToasts();

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
                    console.log({'submitting email from view demo modal': values});
                    const axios = axiosPost('/api/users/free-trial', { email: values.email });

                    axios
                      .then(result => {
                        // setIsRequestSuccess(result.data.success);
                        setIsModalOpen(false);
                        addToast('Success! You should receive the free trial link by email shortly.', {
                          appearance: 'success',
                          autoDismiss: true,
                        });
                      });
                  } catch (err) {
                    addToast(`Error: ${err}`, {
                      appearance: 'error',
                      autoDismiss: true, 
                    })
                  }
                }}
              >
                {() => (
                  <Form>
                    <div className='inner'>
                      <div className='asset'>
                        <span className="iconify" data-icon="mdi:airport" data-inline="false"></span>
                      </div>
                      <h1>{i18n.t('viewDemoModal.title')}</h1>
                      <p>{i18n.t('viewDemoModal.description')}</p>
                      <Field
                        name='email'
                        label={i18n.t('viewDemoModal.emailField')}
                        component={TextField}
                      />
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
