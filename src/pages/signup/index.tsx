import { FormEvent, useState } from "react";

import * as S from "../../components/styles/signup.styles";
import { Logo } from "@/components/icons";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";
import Button from "@/components/Button";
import Link from "next/link";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  async function handleSubmitForm(e: FormEvent) {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Todos os campos devem ser preenchidos");
      // todo: set error modal
      return;
    }

    try {
      // todo: integration with api
      router.push("/dashboard");
    } catch (err) {
      // todo: set error modal
    }
  }

  return (
    <S.Wrapper>
      <S.Main>
        <S.Content>
          <Logo primaryColor="#fff" />
          <S.Title>Faça seu cadastro</S.Title>
          <form onSubmit={handleSubmitForm}>
            <Input
              icon={FiUser}
              name="name"
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
            />
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
            <Input
              icon={FiLock}
              name="confirmPassword"
              type="password"
              placeholder="Confirme a senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button type="submit">Cadastrar</Button>
          </form>
          <S.BackButton>
            <Link href="/login">
              <FiArrowLeft />
              Voltar para login
            </Link>
          </S.BackButton>
        </S.Content>
      </S.Main>
    </S.Wrapper>
  );
}
