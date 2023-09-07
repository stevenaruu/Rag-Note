import { IButton } from "./Button.interfaces"

const Button = (props: IButton) => {
    const { children, variant } = props
    return (
        <div>
            <button className={`${variant} h-8 w-52 rounded-full text-white font-medium text-sm cursor-pointer`}>
                {children}
            </button>
        </div>
    )
}

export default Button