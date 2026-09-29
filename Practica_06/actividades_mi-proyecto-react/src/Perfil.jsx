// ----------------------------------------------------------------------
// PASO 4.1: Importar el hook 'useParams' desde 'react-router'
// ----------------------------------------------------------------------
import { useParams } from "react-router";

export function Perfil() {
  // ----------------------------------------------------------------------
  // PASO 4.2: Extraer la variable 'usuarioId' llamando al hook useParams()
  // ----------------------------------------------------------------------
  const { usuarioId } = useParams();

  return (
    <div style={{ backgroundColor: "#e6f7ff", padding: "15px", borderRadius: "8px" }}>
      <h3> Perfil del Usuario</h3>
      <p>
        Identificador leído desde la URL:{" "}
        <strong style={{ color: "#0070f3", fontSize: "1.1em" }}>
          {/* ------------------------------------------------------------------ */}
          {/* PASO 4.3: Mostrar el valor de la variable 'usuarioId'              */}
          {/* ------------------------------------------------------------------ */}
          {usuarioId}
        </strong>
      </p>
    </div>
  );
}