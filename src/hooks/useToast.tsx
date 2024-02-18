import React, { useCallback, createContext, useContext, useState } from "react";

import { getTenDigitsRandomNumberId } from "@/utils";
import { ToastContainer } from "@/components/ToastContainer";

export interface ToastMessage {
  id?: string;
  title: string;
  subtitle?: string;
  duration?: number;
  isInfinite?: boolean;
  type?: "success" | "error" | "notification";
}

interface ToastContextData {
  addToast(message: ToastMessage): typeof message | undefined;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider = ({ children }: any) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({
      title,
      duration = 8000,
      subtitle,
      type = "success",
      isInfinite,
      id,
    }: ToastMessage) => {
      const foundToast = messages.some((message) => message.id === id);
      if (!foundToast) {
        const newId = id ? id : getTenDigitsRandomNumberId();

        const toast = {
          id: newId,
          title,
          duration,
          subtitle,
          type,
          isInfinite,
        };

        setMessages((state) => [...state, toast]);
        return toast;
      }
      return undefined;
    },
    [messages]
  );
  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export { ToastProvider, useToast };
