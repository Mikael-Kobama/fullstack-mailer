import { Input } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

interface PrimaryInputProps {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
}

export default function PrimaryInput({
  name,
  value,
  onChange,
  label,
}: PrimaryInputProps) {
  return (
    <div className="input-container">
      <label className="label">{label}</label>
      <Input
        variant="filled"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
