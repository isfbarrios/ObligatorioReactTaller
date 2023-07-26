import '../css/login.css';

function Register() {
    return (
        <div className="myform form">
            <div className="logo mb-1">
                <div className="col-md-12 text-center">
                    <h1>Registro</h1>
                </div>
            </div>
            <form action="#" name="registration">
                <div className="mb-3">
                    <label htmlFor="txtEmail" className="form-label">Email</label>
                    <input type="email" name="txtEmail" id="txtEmail" className="form-control" aria-describedby="txtEmailHelp" placeholder="john@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="txtPass" className="form-label">Contraseña</label>
                    <input type="password" name="txtPass" id="txtPass" className="form-control" aria-describedby="txtPassHelp" placeholder="Ingrese su contraseña" />
                </div>
                <div className="col-md-12 text-center mb-3">
                    <button type="submit" className=" btn btn-block mybtn btn-primary">Registrarse</button>
                </div>
                <div className="col-12">
                    <div className="mb-3">
                        <p className="text-center"><a href="#" id="signin">Ya estás registrado?</a></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register