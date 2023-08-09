import { ChangeEvent, FC, useState } from "react";

interface Props {}

const Invoice: FC<Props> = ({}) => {
  const [user, setUser] = useState({ name: "", age: "" });

  console.log(user);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((obj) => ({ ...obj, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <input type="text" name="name" onChange={handleChange} />
      <input type="text" name="age" onChange={handleChange} />
    </>
  );
};

export default Invoice;
