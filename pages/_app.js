import 'tailwindcss/tailwind.css'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../components/DatePicker.css'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
