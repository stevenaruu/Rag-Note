import { IButton } from "./Button.interfaces"

const Button = (props: IButton) => {
    const { children, variant } = props
    return (
        <div>
            <button className={`h-8 w-52 ${variant} rounded-full text-white font-medium text-sm cursor-pointer`}>
                {children}
            </button>
        </div>
    )
}

export default Button