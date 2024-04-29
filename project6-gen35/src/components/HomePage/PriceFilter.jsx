import { useForm } from "react-hook-form";

const PriceFilter = ({ setFromTo }) => {
  const { register, handleSubmit, reset } = useForm();
  const submit = (data) => {
    const from = +data.from;
    const to = data.to;
    setFromTo({
      from: from === "" ? 0 : +from,
      to: to === "" ? Infinity : +to,
    });
    reset({
      from: "",
      to: "",
    });

  };
  return (
    <section>
      <h3>Price</h3>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>From</span>
          <input {...register("from")} type="text" />
        </label>
        <label>
          <span>To</span>
          <input {...register("to")} type="text" />
        </label>
        <button>Apply</button>
      </form>
    </section>
  );
};

export default PriceFilter;
