import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useAuthContext } from "../../contexts";
import { useState } from "react";

import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(5),
});

interface IloginProps {
  children: React.ReactNode;
}

export const Login: React.FC<IloginProps> = ({ children }) => {
  const { isAuthenticated, login } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEntrar = () => {
    setIsLoading(true);

    loginSchema
      .validate({ email, password }, { abortEarly: false })
      .then((dadosValidados) => {
        login(dadosValidados.email, dadosValidados.password).then(() => {
          setIsLoading(false);
        });
      })
      .catch((errors: yup.ValidationError) => {
        setIsLoading(false);

        errors.inner.forEach((error) => {
          if (error.path === "email") {
            setEmailError(error.message);
          } else if (error.path === "password") {
            setPasswordError(error.message);
          }
        });
      });
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems={"center"}
      justifyContent="center"
    >
      <Card>
        <CardContent>
          <Box
            display="flex"
            flexDirection="column"
            gap={4}
            width={400}
            padding={1}
          >
            <Typography variant="h6" align="center">
              Identifique-se
            </Typography>

            <TextField
              fullWidth
              disabled={isLoading}
              label="Email"
              type="email"
              value={email}
              error={!!emailError}
              helperText={emailError}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={() => setEmailError("")}
            />
            <TextField
              fullWidth
              disabled={isLoading}
              label="Senha"
              type="password"
              value={password}
              error={!!passwordError}
              helperText={passwordError}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={() => setPasswordError("")}
            />
          </Box>

          <CardActions>
            <Box width="100%" display="flex" justifyContent={"center"}>
              <Button
                variant="contained"
                disabled={isLoading}
                onClick={handleEntrar}
                endIcon={
                  isLoading ? (
                    <CircularProgress
                      variant="indeterminate"
                      color="inherit"
                      size={20}
                    />
                  ) : undefined
                }
              >
                Entrar
              </Button>
            </Box>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};
