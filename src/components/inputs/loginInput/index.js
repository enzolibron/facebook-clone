import { useField } from "formik";
import "./style.css";

export default function LoginInput({ placeholder, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="input_wrap">
      <input
        placeholder={placeholder}
        type={field.type}
        name={field.name}
        {...field}
        {...props}
      />
    </div>
  );
}
