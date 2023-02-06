import { tw } from 'twind';

export const form = {
  form: tw('bg-indigo-50 flex shadow-md m-8 justify-center rounded px-8 pt-6 pb-8 mb-4'),
  textInput: tw(
    'shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
  ),
  title: tw('text-center text-indigo-600 font-semibold tracking-wide uppercase'),
  customFileUpload: tw(
    'block text-sm text-gray-900 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400',
  ),
  textarea: tw(
    'block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
  ),
  label: tw('block my-2 text-sm font-medium text-indigo-600 dark:text-white'),

  group: tw('flex flex-col mb-4 justify-between items-center'),

  button: tw('bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'),
  buttonRed: tw('bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'),
  defaultBorder: tw(' border-gray-300'),
  borderValid: tw(' border-green-300'),
  borderinValid: tw(' border-red-300'),
};



export const section = {
  header: tw('text-center text-indigo-600 font-semibold tracking-wide uppercase'),
};


export const colors = {
  primary: {
    default: 'indigo-600',
    hover: 'indigo-500',
  },

  secondary:'white',

  accent: {
    default: 'orange-600',
    hover: 'orange-500',
  },

  ctaSection: 'gradient-to-r from-pink-100 via-indigo-300 to-pink-100',
};

  
export const typography = {
  heading: {
    default: tw('  m-auto center mt-2 pb-4 text-xl lg:text-3xl font-bold text-gray-900'),
  },
  p: {
    default: tw(' tracking-wide text-justify indent-1.5 text-gray-700 sm:leading-relaxed md:leading-9'),
  },
  link: {
    default: tw(' underline hover:text-indigo-600'),
  },
};