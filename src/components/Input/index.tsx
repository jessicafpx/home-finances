import { InputHTMLAttributes, useCallback, useRef, useState } from "react";
import * as S from "./styles";
import { IconBaseProps } from "react-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
}

export default function Input({
  name,
  containerStyle = {},
  icon: Icon,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <S.Container
      style={containerStyle}
      $isFilled={isFilled}
      $isFocused={isFocused}
      data-testid="input-container"
    >
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...rest}
      />
    </S.Container>
  );
}
