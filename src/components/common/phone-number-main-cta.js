import React from 'react';
import Button from 'src/components/material-ui/text-button';
import { IPHONE_ICON } from 'src/components/material-ui/icons';
import cx from 'classnames';
import useI18n from 'src/hooks/use-i18n';

function PhoneNumberMainCta({ reverted }) {
  const i18n = useI18n();

  const phoneNumberCta = cx(
    {
      'phone-number-main-cta--reverted': reverted,
    }, 
    'phone-number-main-cta',
  );

  return (
    <>
      <a href={i18n.t('common.companyPhoneNumberHref')}>
        <Button className={phoneNumberCta}>
          {IPHONE_ICON} {i18n.t('common.companyPhoneNumber')}
        </Button>
      </a>
    </>
  );
}

export default PhoneNumberMainCta;
