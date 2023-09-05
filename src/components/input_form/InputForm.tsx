import { text } from "stream/consumers"
import IInputForm from "./InputForm.interfaces"

const InputForm = (props: IInputForm) => {
    const { label, type, placeholder } = props
    return (
        <div className="flex flex-col mb-5">
            <label
                htmlFor="input"
                className="text-gray-600 font-medium text-sm"
            >
                {label} <span className="text-red-600">*</span>
            </label>
            <input
                type={type}
                id="input"
                className="mt-2 px-5 py-3 focus:outline-none rounded-lg text-gray-600 font-medium text-sm"
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputForm