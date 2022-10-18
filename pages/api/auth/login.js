import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

// recibe los datos de autenticación
export default function loginHandler(req, res) {
  const { user, password } = req.body;

  // verificación de credenciales por hardcoded
  if (user === "usuarioAdmi" && password === "admin") {
    //se crea el token
    const token = sign(
      {
        // token valido por 30 dias
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        user: "usuarioAdmi",
        email: "usuarioAdmi@example.com",
      },
      "secret"
    );
    const serialized = serialize("myTokenName", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: "/",
    });

    // se establece una cabecera para manejar la autenticación por medio de una cookie
    res.setHeader("Set-Cookie", serialized);
    return res.status(200).json({
      message: "Login successful",
    });
  }

  return res.status(401).json({ error: "invalid user or password" });
}
