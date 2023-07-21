import { Toast, toast } from 'react-hot-toast'
import { MdOutlineDone } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'

interface CustomToastProps {
    toastId: string,
    message: string,
}

const CustomToast: React.FC<CustomToastProps> = ({
    toastId,
    message,
}) => {
    return (
        <div className="min-w-full md:min-w-[428px] p-7 rounded-2xl max-w-md bg-midnight-gray border-[1px] border-neutral-900 flex items-center gap-3 relative" >
            <MdOutlineDone className="text-coral-pink" size={36} />
            <div className="flex-1">
                <p className="text-neutral-400 font-medium">{message}</p>
            </div>
            <button className="absolute top-3 right-3 group" onClick={() => toast.dismiss(toastId)}>
                <IoClose className="text-neutral-400 group-hover:text-coral-pink transition-all duration-200 transform-gpu" size={20} />
            </button>
        </div >
    )
}

export default CustomToast