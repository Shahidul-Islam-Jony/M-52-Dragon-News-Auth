import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Regsiter = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        // const email = e.target.email.vallue;
        // const password = e.target.password.value;
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget); //getting form value
        // console.log(form.get('email'));
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log(name,photo,email,password);
        createUser(email,password)
        .then(res=>{
            console.log(res.user);
        })
        .catch(error=>console.error(error))
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Register</h2>

                <form onSubmit={handleRegister} className="md:3/4 lg:w-1/2 mx-auto" >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" required placeholder="Your name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" required placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" required placeholder="Your email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

                <p className="text-center mt-4">Already have an account <Link to='/login' className="text-blue-500 font-bold">Login</Link></p>

            </div>
        </div>
    );
};

export default Regsiter;