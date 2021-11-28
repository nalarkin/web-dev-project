import * as React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'react-toastify/dist/ReactToastify.min.css' // minified

export const ToastContext = React.createContext<SessionContextInterface>({
  notifySuccess: () => null,
  notifyError: () => null,
  notifyPromise: () => null,
});

interface ToastProviderProps {
  children: React.ReactNode;
}

interface PromiseMessages {
  pending: string;
  success: string;
  error: string;
}

const defaultPromiseMessages: PromiseMessages = {
  pending: 'Loading...',
  success: 'Success!',
  error: 'Error!',
};

interface SessionContextInterface {
  notifySuccess: (message?: string) => void | null;
  notifyError: (message?: string) => void | null;
  notifyPromise: (
    promise: Promise<unknown>,
    messages?: PromiseMessages
  ) => void | null;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  const notifySuccess = React.useCallback<
    SessionContextInterface['notifySuccess']
  >((message = 'Sucess!') => {
    toast.success(message);
  }, []);

  const notifyError = React.useCallback<SessionContextInterface['notifyError']>(
    (message = 'Error!') => {
      toast.error(message);
    },
    []
  );
  /** Useful for asynchronous notifications */
  const notifyPromise = React.useCallback<
    SessionContextInterface['notifyPromise']
  >((promise, messages = defaultPromiseMessages) => {
    // if messages is undefined it will provide default messages
    // const { pending, success, error } = messages;
    toast.promise(promise, {
      // pending,
      // success,
      // error,
      ...messages,
    });
  }, []);

  const contextValue = React.useMemo(() => {
    return {
      notifySuccess,
      notifyError,
      notifyPromise,
    };
  }, [notifySuccess, notifyError, notifyPromise]);

  return (
    <ToastContext.Provider value={contextValue}>
      <>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={2200}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return React.useContext(ToastContext);
}
