// Importaciones de librerías base de React
import React from "react";
import ReactDOM from "react-dom/client";

// Importaciones necesarias de React Router
import { createBrowserRouter, RouterProvider } from "react-router";

// Importación de componentes de vista
import { Layout } from "./Layout";
import { Home } from "./Home";
import { Perfil } from "./Perfil";
import { NotFound } from "./NotFound";

// ============================================================================
// CONFIGURACIÓN DEL ENRUTADOR (createBrowserRouter)
// ============================================================================
const router = createBrowserRouter([
  {
    path: "/",              // Ruta raíz de la aplicación
    Component: Layout,      // Componente padre (Maqueta)
    children: [
      // ----------------------------------------------------------------------
      // PASO 1.1: Ruta por defecto (index)
      // ----------------------------------------------------------------------
      { index: true, Component: Home },
      
      // ----------------------------------------------------------------------
      // PASO 1.2: Ruta dinámica "perfil/:usuarioId"
      // ----------------------------------------------------------------------
      { path: "perfil/:usuarioId", Component: Perfil },
      
      // ----------------------------------------------------------------------
      // PASO 1.3: Ruta comodín "*" para error 404
      // ----------------------------------------------------------------------
      { path: "*", Component: NotFound },
    ],
  },
]);

// ============================================================================
// MONTAJE EN EL DOM
// ============================================================================
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* ---------------------------------------------------------------------- */}
    {/* PASO 1.4: Inyectar el componente RouterProvider                        */}
    {/* ---------------------------------------------------------------------- */}
    <RouterProvider router={router} />
  </React.StrictMode>
);