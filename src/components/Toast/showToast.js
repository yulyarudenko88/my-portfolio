import toast from 'react-hot-toast';

export const showMessageToast = message => {
  toast.success(`${message}`, {
    icon: '😃',
    duration: 3000,
    style: {
      marginTop: '30px',
      backgroundColor: 'rgb(209, 209, 209)',
    },
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });
};

export const showErrorToast = error => {
  toast.error(` ${error}`, {
    icon: '🤨',
    duration: 3000,
    style: {
      marginTop: '30px',
      backgroundColor: 'rgb(209, 209, 209)',
    },
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });
};
