import { Navigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { login } from "../../actions/auth";
import {
  Input,
  Button,
  Bold,
  Flex,
  StyledLink,
} from "../../components/shared/styles";
import { useAuthContext } from "../../contexts/auth/AuthProvider";
import { FillCreds, Redirect, Wrapper, Text } from "./styles";
import { useState } from "react";

type TLogin = {
  email: string;
  password: string;
};

export function Login(): JSX.Element {
  const [logging, setLogging] = useState(false);
  const {
    authState: { logged },
    authDispatch,
  } = useAuthContext();
  const formik = useFormik<TLogin>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required("Required"),
      password: yup
        .string()
        .min(6, "Minimum 6 charaters required.")
        .required("Required"),
    }),
    onSubmit: (values) => {
      setLogging(true);
      login(values, authDispatch);
    },
  });
  if (logged) return <Navigate to="/" />;
  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <Flex>
          <Input
            type="text"
            placeholder="Email"
            id="email"
            {...formik.getFieldProps("email")}
          />
          <Text>
            {formik.touched.email && formik.errors.email && formik.errors.email}
          </Text>
          <Input
            type="password"
            placeholder="Password"
            id="password"
            {...formik.getFieldProps("password")}
          />
          <Text>
            {formik.touched.password &&
              formik.errors.password &&
              formik.errors.password}
          </Text>
          <Button type="submit">{logging ? "Loging in..." : "Login"}</Button>
        </Flex>
      </form>
      <FillCreds
        onClick={() => {
          formik.setFieldValue("email", "tiwariaditya15@hotmail.com");
          formik.setFieldValue("password", "123456");
        }}
      >
        Fill Creds
      </FillCreds>
      <Redirect>
        Don't have an account?
        <StyledLink to="/signup">
          <Bold>SignUp</Bold>
        </StyledLink>
      </Redirect>
    </Wrapper>
  );
}
