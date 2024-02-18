import React, { ReactElement, useEffect } from "react";

import { Container, Content, Message } from "./styles";
import { FiAlertCircle, FiCheckCircle, FiX, FiXCircle } from "react-icons/fi";
import { ToastMessage, useToast } from "@/hooks/useToast";

interface ToastProps {
  message: ToastMessage;
}

export const Toast = ({ message }: ToastProps) => {
  const { removeToast } = useToast();

  useEffect(() => {
    if (!message.isInfinite) {
      const timer = setTimeout(() => {
        removeToast(message.id!);
      }, message?.duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [removeToast, message.id]);

  const icons: { [key: string]: ReactElement } = {
    success: <FiCheckCircle color="#fff" />,
    error: <FiXCircle color="#fff" />,
    notification: <FiAlertCircle color="#fff" />,
  };

  const icon = icons[message.type || "success"];

  const toast = (
    <Container hasSubtitle={!!message.subtitle} className={message.type}>
      {message.type === "notification" && (
        <button
          className="icon-close-container"
          onClick={() => removeToast(message.id!)}
          data-testid="close-button"
        >
          <FiX color="#fff" />
        </button>
      )}
      <Content>
        {icon}
        <Message>
          <p>{message.title}</p>
          <p className="subtitle">{message.subtitle}</p>
        </Message>
      </Content>
    </Container>
  );

  return toast;
};
