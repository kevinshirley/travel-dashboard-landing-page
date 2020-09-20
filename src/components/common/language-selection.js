import React from 'react';
import * as R from 'ramda';
import Router, { useRouter } from 'next/router';
import Select from '@material-ui/core/Select';
import { languages } from 'src/lib/i18n';

function LanguageSelection() {
  const router = useRouter();
  const currentLang = router.query.lng;

  const [state, setState] = React.useState({
    language: currentLang,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const lang = event.target.value;

    setState({
      ...state,
      [name]: lang,
    });

    Router.push(`/${lang}`);
  };

  return (
    <Select
      native
      className='language-selection'
      value={state.language}
      onChange={handleChange}
      inputProps={{
        name: 'language',
      }}
    >
      {languages.map(lang => (
        <option value={lang}>{R.toUpper(lang)}</option>
      ))}
    </Select>
  );
}

export default LanguageSelection;
