"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type CustomImageUploadProps = {
  name: string;
  label?: string;
};

const CustomImageUpload = ({ name, label }: CustomImageUploadProps) => {
  const { control } = useFormContext();

  return (
    <div className="mb-4 space-y-2">
      {label && (
        <Label className="text-black/85 font-medium text-base" htmlFor={name}>
          {label}
        </Label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            type="file"
            id={name}
            onChange={(e) =>
              field.onChange(e.target.files ? e.target.files[0] : null)
            }
          />
        )}
      />
    </div>
  );
};

export default CustomImageUpload;
