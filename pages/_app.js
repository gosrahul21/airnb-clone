import 'tailwindcss/tailwind.css'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../components/DatePicker.css'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router';

const progress = new ProgressBar({
  size:2,
  color:'#FE595E',
  className:'z-50',
  delay:100
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

Router.events.on('routeChangeStart',progress.start);
Router.events.on('routeChangeComplete',progress.finish);
Router.events.on('routeChangeError',progress.finish);

export default MyApp
