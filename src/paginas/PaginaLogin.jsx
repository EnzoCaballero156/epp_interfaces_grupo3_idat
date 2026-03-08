import { Link } from 'react-router-dom';
import Form from '../components/Form';
import FormInput from '../components/FormInput';
import Header from '../components/Header';

const PaginaLogin = () => {
  return (
    <div className="pagina">
      <Header/>
      <Form 
        titulo="Bienvenido" 
        subtitulo={
          <>
            ¿No tienes una cuenta? <Link to="/">Únete ahora</Link>
          </>
        }
        textoEnviar="Ingresar"
        to="/admin"
      >
        <FormInput label="Correo electrónico" type="large"/>
        <FormInput label="Contraseña" type="large"/>
        <Link to="#">¿Olvidaste tu contraseña?</Link>
      </Form>
    </div>
  );
}

export default PaginaLogin;