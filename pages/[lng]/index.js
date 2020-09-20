import HomePage from 'src/components/home';
import { languages } from 'src/lib/i18n';

export async function getStaticProps({ params }) {
  const { default: lngDict = {} } = await import(
    `../../src/locales/${params.lng}.json`
  )

  return {
    props: { lng: params.lng, lngDict },
  }
}

export async function getStaticPaths() {
  return {
    paths: languages.map((l) => ({ params: { lng: l } })),
    fallback: false,
  }
}

export default HomePage;
