import { FormEvent, useState } from "react";

import illustrationImg from "../../../public/images/illustration.png";

import * as S from "../../components/styles/login.styles";
import { Logo } from "@/components/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import { FiLock, FiMail } from "react-icons/fi";
import Button from "@/components/Button";
import Link from "next/link";
import { useListUsers } from "@/services/users/hooks/GET/useListUsers";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { push } = useRouter();

  const { data: users } = useListUsers();

  console.log(users?.[0]);

  async function handleSubmitForm(e: FormEvent) {
    e.preventDefault();

    if (!email || !password) {
      alert("Todos os campos devem ser preenchidos");
      // todo: set error modal
      return;
    }

    try {
      const foundedUser = users?.find((user) => user.email === email);

      if (foundedUser && foundedUser.password === password) {
        push("/transactions");
      } else {
        alert("Usuário não encontrado");
      }
    } catch (err) {
      // todo: set error modal
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
            <Link href="/signup">Criar agora</Link>
          </S.SignUp>
        </S.Content>
      </S.Main>
    </S.Wrapper>
  );
}
