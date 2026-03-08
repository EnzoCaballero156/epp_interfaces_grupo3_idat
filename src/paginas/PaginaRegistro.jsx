import { Link } from 'react-router-dom';
import Check from '../components/Check';
import Form from '../components/Form';
import FormInput from '../components/FormInput';
import Header from '../components/Header';

const PaginaRegistro = () => {
  return (
    <div className="pagina">
      <Header/>
      <Form 
        titulo="Regístrate" 
        subtitulo={
          <>
            ¿Ya tienes cuenta en PERUHUT? <Link to="/login">Inicia sesión</Link>
          </>
        }
        cuentaGoogle={true}
        textoEnviar="Registrar"
        to="/login"
        textoAdicional={
        <>
          Al seleccionar “Registrar” o “Continuar con Google, Facebook o Apple”, aceptas los <Link to="#">Términos y Condiciones</Link> y la <Link to="#">Política de Privacidad</Link> de *****.
        </>
        }
      >
        <FormInput label="Nombres"/>
        <FormInput label="Apellidos"/>
        <FormInput label="Tipo de documento"/>
        <FormInput label="Número de documento"/>
        <FormInput label="Teléfono"/>
        <FormInput label="Email"/>
        <FormInput label="Contraseña" type="large"/>
        <Check label="Quisiera recibir promociones y descuentos"/>
      </Form>
    </div>
  );
}

export default PaginaRegistro;
