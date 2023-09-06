const Waves = () => {
    return (
        <svg className='fixed bottom-0 w-4/6' height="30%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" overflow="auto" shape-rendering="auto" fill="#ffffff" fill-opacity="0.1">
            <defs>
                <path id="wavepath" d="M 0 2000 0 500 Q 78 364 156 500 t 156 0 156 0 156 0 156 0 156 0 156 0 156 0 156 0  v1000 z" />
                <path id="motionpath" d="M -312 0 0 0" />
            </defs>
            <g >
                <use xlinkHref="#wavepath" y="-388" fill="#000000">
                    <animateMotion
                        dur="5s"
                        repeatCount="indefinite">
                        <mpath xlinkHref="#motionpath" />
                    </animateMotion>
                </use>
            </g>
        </svg>
    )
}

export default Waves