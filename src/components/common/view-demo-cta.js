import React from 'react';
import Button from 'src/components/material-ui/text-button';
import cx from 'classnames';
import useI18n from 'src/hooks/use-i18n';

function ViewDemoCta({ isModalOpen, setIsModalOpen }) {
  const i18n = useI18n();
  console.log({ isModalOpen });
  return (
    <>
      <Button className='view-demo-cta' onClick={() => setIsModalOpen(true)}>
        {i18n.t('common.viewDemo')}
      </Button>
    </>
  );
}

export default ViewDemoCta;
