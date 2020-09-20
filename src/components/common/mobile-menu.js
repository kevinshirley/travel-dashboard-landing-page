import React, { useState } from 'react';
import * as R from 'ramda';
import cx from 'classnames';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';
import { MENU } from 'src/components/material-ui/icons';
import Button from 'src/components/material-ui/text-button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useI18n from 'src/hooks/use-i18n';
import Link from 'src/components/common/link';
import { languages } from 'src/lib/i18n';

const theme = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function MobileMenu() {
  const i18n = useI18n();
  const classes = useStyles(theme);

  const mobileMenuClasses = cx({
    [classes.list]: true,
    'mobile-menu': true,
  });

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    openDrawer(anchor, open);
  };

  const openDrawer = (anchor, open) => {
    setState({[anchor]: open });

    toggleDrawer(open);
  };

  const list = () => (
    <div
      className={mobileMenuClasses}
      role="presentation"
      onClick={toggleDrawer('right', false)}
      onKeyDown={toggleDrawer('right', false)}
      style={{
        background: 'transparent'
      }}
    >
      <List>
        <a href={i18n.t('navigation.howItWorksIdHash')}>
          <ListItem button>
            <ListItemText className='link' primary={i18n.t('mobileMenu.link1')} />
          </ListItem>
        </a>
        <a href={i18n.t('navigation.sellMyCarIdHash')}>
          <ListItem button>
            <ListItemText className='link' primary={i18n.t('mobileMenu.link2')} />
          </ListItem>
        </a>
        <a href={i18n.t('navigation.contactIdHash')}>
          <ListItem button>
            <ListItemText className='link' primary={i18n.t('mobileMenu.link3')} />
          </ListItem>
        </a>
        <div className='language'>
          {languages.map(lang => (
            <Link href={`/${lang}`}>
              {R.toUpper(lang)}
            </Link>
          ))}
        </div>
      </List>
    </div>
  );

  return (
    <>
      <Button onClick={toggleDrawer('right', true)}>{MENU}</Button>
      <SwipeableDrawer 
        anchor='right'  
        open={state.right} 
        onClose={toggleDrawer('right', false)}
      >
        {list()}
      </SwipeableDrawer>
    </>
  );
}

export default MobileMenu;
