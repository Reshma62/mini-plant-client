import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Controller, FieldError } from "react-hook-form";
import ErrorMessage from "../Common/ErrorMessage"; // Adjust the path as per your project structure

type TSelectOption = {
  label: string;
  value: string;
};

type TSelectProps = {
  name: string;
  label?: string;
  options: TSelectOption[];
  disabled?: boolean;
};

const CustomSelect = ({ name, label, options, disabled }: TSelectProps) => {
  return (
    <div className="mb-4 space-y-2">
      {label && (
        <Label className="text-black/85 font-medium text-base" htmlFor={name}>
          {label}
        </Label>
      )}
      <Controller
        name={name}
        rules={{ required: `${label} is required` }}
        render={({ field, fieldState: { error } }) => (
          <div>
            <Select
              {...field}
              onValueChange={(value) => field.onChange(value)}
              disabled={disabled}
            >
              <SelectTrigger
                id={name}
                className="w-full text-black/85 font-medium text-base border border-solid border-primary/20 rounded"
              >
                <SelectValue placeholder={`Select ${label}`} />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectLabel>{label}</SelectLabel>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {error && (
              <ErrorMessage message={(error as FieldError)?.message || ""} />
            )}
          </div>
        )}
      />
    </div>
  );
};

export default CustomSelect;
