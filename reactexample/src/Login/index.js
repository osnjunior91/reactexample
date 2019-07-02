import React from 'react';
import './index.css';

function Login(){
return(
    <div className="login">
        <div className="jumbotron">
           <form>
           <div class="form-group">
                <label for="usr">Email:</label>
                <input type="text" class="form-control" id="usr" />
            </div>
            <div class="form-group">
                <label for="pwd">Senha:</label>
                <input type="password" class="form-control" id="pwd" />
            </div>
                <p><a class="btn btn-primary btn-lg" href="#" role="button">Login</a></p><br/>
           </form>
        </div>
    </div>  
);
}

export default Login;