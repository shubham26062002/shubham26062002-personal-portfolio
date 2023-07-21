import { twMerge } from 'tailwind-merge'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface InputProps {
    label?: string,
    id: ContactFormFieldId,
    type?: string,
    focusColor?: Color,
    required?: boolean,
    register: UseFormRegister<ContactFormValues>,
    errors: FieldErrors,
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    type = 'text',
    focusColor = 'sea-green',
    required = false,
    register,
    errors,
}) => {
    return (
        <div>
            <div className="relative">
                <input className="peer w-full border-b-[1px] border-neutral-700 bg-transparent py-[5px] text-neutral-700 focus:outline-none" id={id} type={type} {...register(id)} required />
                <label className={twMerge('absolute block w-fit inset-0 text-neutral-400 transition-all duration-200 transform-gpu peer-valid:top-[-50%] peer-valid:text-sm peer-focus:top-[-50%] peer-focus:text-sm  after:text-sea-green after:absolute after:-right-2', required && 'after:content-["*"]', focusColor === 'coral-pink' && 'after:text-coral-pink')} htmlFor={id}>{label}</label>
                <div className={twMerge('h-[2px] origin-left scale-0 bg-sea-green transition-all duration-200 transform-gpu peer-valid:scale-100 peer-focus:scale-100', focusColor === 'coral-pink' && 'bg-coral-pink')}></div>
            </div>
            {errors[id] ?
                <span className={twMerge('text-xs text-sea-green', focusColor === 'coral-pink' && 'text-coral-pink')}>{errors[id]?.message as React.ReactNode}</span>
                :
                <span className={twMerge('text-xs text-sea-green', focusColor === 'coral-pink' && 'text-coral-pink')}>&nbsp;</span>
            }
        </div>
    )
}

export default Input