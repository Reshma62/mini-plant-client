import ErrorMessage from "@/components/shared/ErrorMessage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, FieldError } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: string;
};

const CustomInput = ({
  type,
  name,
  label,
  placeholder,
  disabled,
  defaultValue,
}: TInputProps) => {
  return (
    <div className="mb-4 space-y-2">
      <Controller
        name={name}
        defaultValue={defaultValue}
        rules={{ required: `${label} is required` }}
        render={({ field, fieldState: { error } }) => (
          <>
            <Label
              className="text-black/85 font-medium text-base"
              htmlFor={name}
            >
              {label}
            </Label>
            <Input
              {...field}
              type={type}
              id={name}
              disabled={disabled}
              placeholder={placeholder}
              className="text-black/85 font-medium text-base border border-solid border-primary/20 rounded"
            />
            {error && (
              <ErrorMessage message={(error as FieldError)?.message || ""} />
            )}
          </>
        )}
      />
    </div>
  );
};

export default CustomInput;
