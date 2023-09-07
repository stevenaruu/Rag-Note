import Link from "next/link"
import { IAnchor } from "./Anchor.interfaces"

const Anchor = (props: IAnchor) => {
    const { children, variant, href } = props
    return (
        <Link href={href} className={`${variant} underline underline-offset-1 cursor-pointer`}>{children}</Link>
    )
}

export default Anchor