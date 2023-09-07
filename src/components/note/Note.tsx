import { INote } from "@/interfaces/Note.interfaces"

const Note = (props: INote) => {
    const { id, title, content, userId } = props
    return (
        <div className='cursor-pointer w-72 h-3/6 bg-white flex p-5 shadow-lg rounded-md border-2 border-gray-300'>
            <div>
                <p className="text-lg font-semibold text-gray-900">{title}</p>
                <p className="mt-2 text-sm text-gray-800">
                    {
                        content.length > 450 ? `${content.substring(0, 450)}...` : content 
                    }
                </p>
            </div>
        </div>
    )
}

export default Note