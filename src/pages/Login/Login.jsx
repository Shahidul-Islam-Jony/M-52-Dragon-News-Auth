import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        // const email = e.target.email.vallue;
        // const password = e.target.password.value;
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // console.log(form.get('email'));
        const email = form.get('email');
        const password = form.get('password');
        login(email,password)
        .then(res=>{
            console.log(res.user);
            alert('User Login Successful')
        })
        .catch(error=>console.error(error))
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Login</h2>

                <form onSubmit={handleLogin} className="md:3/4 lg:w-1/2 mx-auto" >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" required placeholder="email" className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" required placeholder="password" className="input input-bordered"/>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>

                <p className="text-center mt-4">Do not have an account <Link to='/register' className="text-red-500 font-bold">Register</Link></p>

            </div>
        </div>
    );
};

export default Login;