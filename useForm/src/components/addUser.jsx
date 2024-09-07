import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  surname: yup.string().required("Surname is required"),
  login: yup.string().email("Invalid email").required("Email is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const AddUser = ({setUsers }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = (data) => {
    const transformData = { ...data, id: Date.now() };

    setUsers((prev) => [...prev, transformData]);
    toast.success("User added successfully!");

    reset();
  };
  return (
    <div>
      <h3>adduser</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        style={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        <input
          type="text"
          {...register("name")}
          placeholder="enter Your name"
        />

        {errors.surname && (
          <p style={{ color: "red" }}>{errors.surname.message}</p>
        )}
        <input
          type="text"
          {...register("surname")}
          placeholder="enter Your surname"
        />

        {errors.login && <p style={{ color: "red" }}>{errors.login.message}</p>}
        <input
          type="Email"
          {...register("login")}
          placeholder="enter Your login"
        />

        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
        <input
          type="number"
          {...register("age")}
          placeholder="enter Your age"
        />

        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        <input
          type="password"
          {...register("password")}
          placeholder="enter Your password"
        />

        <button style={{ backgroundColor: "yellowgreen" }}>save</button>
        <ToastContainer/>
      </form>
    </div>
  );
};
