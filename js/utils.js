import { tw } from 'twind';

export const styles = {
  form: tw('bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'),
  textInput: tw(
    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
  ),
  title: tw('text-center text-indigo-600 font-semibold tracking-wide uppercase'),
  customFileUpload: tw(
    'block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400',
  ),
  textarea: tw(
    'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
  ),
  label: tw('block my-2 text-sm font-medium text-indigo-600 dark:text-white'),

  defaultBorder: tw(' border-gray-300'),
  borderValid: tw(' border-green-300'),
  borderinValid: tw(' border-red-300'),
};
