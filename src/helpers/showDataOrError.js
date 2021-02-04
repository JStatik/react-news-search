import Error from '../components/Error';
import New from '../components/New';

const showDataOrError = ( newsAPI, error ) => {
    if( error ) {
        return  <Error
                    height="450px"
                    size="20px"
                    error="No se pudo obtener las noticias. Intente nuevamente."
                />;
    } else {
        return newsAPI.map( newAPI => {
            const { url } = newAPI;

            return <New key={ url } new={ newAPI } />
        } );
    }
};

export default showDataOrError;
