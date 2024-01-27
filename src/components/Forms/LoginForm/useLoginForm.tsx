import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "../../../validation/userSchema";

export const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formMethods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    formMethods.reset();
  };

  return {
    formMethods,
    showPassword,
    setShowPassword,
    onSubmit,
  };
};
