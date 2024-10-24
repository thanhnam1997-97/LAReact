import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
    email: string;
    password: string;
};
const LoginPage = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const loginHandler: SubmitHandler<Inputs> = async (payload) => {
        const logged = await login(payload);
        logged && navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-5 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold md-6 text-center">
                    Đăng Nhập
                </h1>
                <form onSubmit={handleSubmit(loginHandler)}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-sm font-medium mb-2"
                        >
                            Email:
                        </label>
                        <input
                            type="text"
                            id="email"
                            placeholder=""
                            className="w-full h-11 p-3 border rounded-md border-gray-400 focus:outline-none focus:border-sky-500 focus:ring focus-blue-200"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <span className="text-red-500 text-xs">
                                Vui lòng nhập Emali
                            </span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-sm font-medium mb-2"
                        >
                            Mật Khẩu:
                        </label>
                        <input
                            type="password"
                            id="papassword"
                            placeholder=""
                            className="w-full h-11 p-3 border rounded-md border-gray-400 focus:outline-none focus:border-sky-500 focus:ring focus-blue-200"
                            {...register("password", { required: true })}
                        />
                        {errors.password && (
                            <span className="text-red-500 text-xs">
                                Vui lòng nhập mật khẩu
                            </span>
                        )}
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white hover:bg-blue-700 py-3 rounded-md"
                        >
                            Đăng Nhập
                        </button>
                    </div>
                    <p className="text-left text-gray-700">
                        <a href="/" className="text-blue-500">
                            Quên mật khẩu
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
