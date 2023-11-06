import React from "react";
import InputIcon from "../FormFields/InputIcon";
import Input from "../FormFields/Input";
import IconButton from "../Buttons/IconButton";
import { AuthFormInputType, AuthFormType } from '../../Interfaces/Auth';

export default function AuthForm({ inputs, submit, url, btn }:AuthFormType) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <div className="px-4 py-8 sm:rounded-lg sm:px-5">
        <form className="space-y-6" onSubmit={submit}>
          {inputs.map((inp: AuthFormInputType, i: number) => (
            <>
              {inp.icon ? (
                <InputIcon
                key={i}
                  label={inp.label}
                  type={inp.type}
                  value={inp.value}
                  change={inp.change}
                  required={inp.required}
                  id={inp.id}
                  placeholder={inp.placeholder}
                  description={inp.description}
                  
                  Icon={inp.icon}
                />
              ) : (
                <Input
                key={i}
                label={inp.label}
                type={inp.type}
                value={inp.value}
                change={inp.change}
                required={inp.required}
                id={inp.id}
                placeholder={inp.placeholder}
                description={inp.description}
                
                />
              )}
            </>
          ))}
          <div className="">
            <IconButton
              size={btn.size}
              value={btn.value}
              click={btn.click}
              location={btn.location}
              Icon={btn.Icon}
              type={btn.type}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
