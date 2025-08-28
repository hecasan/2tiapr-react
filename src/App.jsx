import UsuarioInfo from "./components/UsuarioInfo";
import ListaNumeros from "./components/ListaNumeros";
export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <h1>Estado com Objetos e Arrays</h1>
      <UsuarioInfo />
      <hr />
      <ListaNumeros />
    </main>
  );
}