import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormValues = { email: string; password: string };

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    // dummy auth — store token & go to dashboard
    localStorage.setItem("token", "dummy-jwt");
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-2xl border bg-white p-6 shadow-sm"
      >
        <h1 className="mb-6 text-2xl font-semibold text-gray-800">
          Sign in to HealthCare
        </h1>

        <label className="mb-1 block text-sm text-gray-600">Email</label>
        <input
          className="mb-2 w-full rounded-xl border px-3 py-2 outline-none focus:ring"
          type="email"
          placeholder="you@example.com"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="mb-3 text-xs text-red-500">{errors.email.message}</p>
        )}

        <label className="mb-1 block text-sm text-gray-600">Password</label>
        <input
          className="mb-2 w-full rounded-xl border px-3 py-2 outline-none focus:ring"
          type="password"
          placeholder="••••••••"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Min 6 characters" },
          })}
        />
        {errors.password && (
          <p className="mb-4 text-xs text-red-500">{errors.password.message}</p>
        )}

        <button
          disabled={isSubmitting}
          className="mt-2 w-full rounded-xl bg-black px-4 py-2 text-white hover:opacity-90 disabled:opacity-60"
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
