/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";


const BentoTilt = ({children, className = ''}) => {
    const [transformStyle, setTransformStyle] = useState('');

    const itemRef = useRef(null);

    const handleMouseEnter = (e) => {
        if(!itemRef.current) return;
        const {left, top, width, height} = itemRef.current.getBoundingClientRect();
        const relativeX = (e.clientX - left)/width;
        const relativeY = (e.clientY - top)/height;
        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;
        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle('');
    }

    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseEnter} onMouseLeave={handleMouseLeave}  style={{transform: transformStyle}}>
            {children}
        </div>
    )
}
const BentoCard = ({src, title, description}) => {
    return (
        
        <div className="relative size-full">
            <video src={src} autoPlay muted loop className="absolute top-0 left-0  size-full object-center object-cover" />
            <div className="relative z-10 flex size-full flex-col justify-between text-blue-50 p-5">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description &&(
                        <p className="mt-3 max-w-64 text-sm md:text-base">{description}</p>
                    )}
                </div>

            </div>
            
        </div>
        
    )
}

const Features= () =>{
    return (
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-lg text-blue-50">Into the Metagame Layer</p>
                    <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">Immerse Yourself in a rich and ever-expandin universe where a vibrant arrays of product converge into an 
                        interconnected overlay experience on your world.</p>
                </div>
                <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                    <BentoCard 
                        src="/public/videos/feature-1.mp4"
                        title={<>Radia<b>n</b>t</>}
                        description="A cross action metagame app, turning your activities across web2 and web3 games into rewarding adventure."
                        
                    />
                </BentoTilt>
                <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard 
                            src="/public/videos/feature-2.mp4"
                            title={<>Zig<b>m</b>a</>}
                            description="An Anime and gaming-inspire NFT collection - the IP primed for expansion."
                            
                        />

                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard 
                            src="/public/videos/feature-3.mp4"
                            title={<>N<b>e</b>xus</>}
                            description="An Anime and gaming-inspire NFT collection - the IP primed for expansion."
                            
                        />

                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                        <BentoCard 
                            src="/public/videos/feature-4.mp4"
                            title={<>az<b>u</b>l</>}
                            description="An Anime and gaming-inspire NFT collection - the IP primed for expansion."
                            
                        />

                    </BentoTilt>
                    <div className="bento-tilt_2 ">
                        <div className="flex size-full flex-col justify-between bg-violet-500 p-5">
                            <h1 className="bento-title special-font max-w-64 text-black">M<b>o</b>re Co<b>m</b>ing So<b>o</b>n!</h1>
                            <TiLocationArrow className=" m-5 scale-[5] self-end " />
                        </div>

                    </div>
                    <div className="bento-tilt_2">
                        <video src="/public/videos/feature-5.mp4" autoPlay muted loop 
                        className=" size-full object-center object-cover"></video>
                    </div>    
                </div>
            </div>
        </section>
    )
}

export default Features;