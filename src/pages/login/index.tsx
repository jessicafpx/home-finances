import { FormEvent, useCallback, useState } from "react";

import illustrationImg from "../../../public/images/illustration.png";

import * as S from "./styles";
import { Logo } from "@/components/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import { FiLock, FiMail } from "react-icons/fi";
import Button from "@/components/Button";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleSubmitForm(e: FormEvent) {
    e.preventDefault();

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]/;

    // if (!password.match(regex)) {
    //   setErrorMsg('Senha precisa ter: entre 8 e 15 caracteres, letra maiúscula, letra minúscula, número e caractere especial');
    //   setIsModalErrorOpen(true);
    //   return;
    // }

    try {
      // await signIn({ email, password });
      router.push("/dashboard");
    } catch (err) {
      // setErrorMsg(
      //   "E-mail ou senha inválidos. Por favor, revise e tente novamente."
      // );
      // setIsModalErrorOpen(true);
    }
  }

  return (
    <S.Wrapper>
      <S.Aside>
        <Logo />
        <Image
          src={illustrationImg}
          alt="pessoa colhendo dinheiro"
          id="illustration"
        />
        <S.Description>
          Organize seu orçamento e alcance suas metas
        </S.Description>
      </S.Aside>
      <S.Main>
        <S.Content>
          <Logo primaryColor="#fff" />
          <S.Title>Faça seu login</S.Title>
          <S.Form onSubmit={handleSubmitForm}>
            <Input
              icon={FiMail}
              name="email"
              type="text"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Digite a senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Entrar</Button>
          </S.Form>
          <S.SignUp>
            Não tem uma conta?
            <Link className="signup" href="/signup">
              Criar agora
            </Link>
          </S.SignUp>
        </S.Content>
      </S.Main>
    </S.Wrapper>
  );
}
