import React from "react";

import { Container } from "./styles";
import { ToastMessage } from "@/hooks/useToast";
import { Toast } from "./Toast";

interface ToastContainerProps {
  messages: ToastMessage[];
}

export const ToastContainer = ({ messages }: ToastContainerProps) => {
  return (
    <Container>
      {messages.map((item) => (
        <Toast key={item.id} message={item} />
      ))}
    </Container>
  );
};
