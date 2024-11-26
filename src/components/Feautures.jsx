import { useRef, useState } from "react"
import { TiLocationArrow } from "react-icons/ti"

const BentoTilt = ({ children, className = ''}) => {
    const [ transformStyle, setTransformStyle ] = useState('');
    const itemRef = useRef();

    const handleMouseMove = (event) => {
        if (!itemRef.current) return;
    
        const { left, top, width, height } =
          itemRef.current.getBoundingClientRect();
    
        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;
    
        const tiltX = (relativeY - 0.5) * 30;
        const tiltY = (relativeX - 0.5) * -30;
    
        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformStyle(newTransform);
      };
    
      const handleMouseLeave = () => {
        setTransformStyle("");
      };  
      
    return (
        <div 
        ref={itemRef}
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: transformStyle }}
        >
            {children}
        </div>
    )
}

const BentoCard = ({ src, title, description, isComingSoon }) => {
    return (
        <div 
            id="vault"
            className="relative size-full">
            <video
            src={src}
            loop
            muted
            autoPlay
            className="absolute top-0 left-0 object-cover object-center size-full"
      />
      <div className="relative z-10 flex flex-col justify-between p-5 size-full text-blue-50">
        <div>
            <h1 className="bento-title special-font">{title}</h1>
            {description && (
            <p className="mt-3 text-xs max-w-64 md:text-base">{description}</p>
          )}
        </div>
        
    
      </div>
        </div>
    )
}

const Feautures = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container px-3 mx-auto md:px-10">
        <div className="px-5 py-32">
        <p className="text-lg font-circular-web text-blue-50">
          Into the Metagame Layer
        </p>
        <p className="max-w-md text-lg opacity-50 font-circular-web text-blue-50">
         
            Step into a dynamic and ever-evolving universe where a diverse range of products 
            seamlessly merge, creating an interconnected experience that transforms the way you 
            engage with the world.
        </p>  
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
            <BentoCard 
             src="videos/feature-1.mp4"
             title=
             {
             <>radia<b>n</b>t</>
             }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            isComingSoon
          />
        </BentoTilt>
        
        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="row-span-1 bento-tilt_1 md:col-span-1 md:row-span-2">
         <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                zig<b>m</b>a
              </>
            }
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="row-span-1 bento-tilt_1 ms-32 md:col-span-1 md:ms-0">
        <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                n<b>e</b>xus
              </>
            }
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            isComingSoon
          /> 
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
        <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                az<b>u</b>l
              </>
            }
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
        <div className="flex flex-col justify-between p-5 size-full bg-violet-200">
            <h1 className="text-gray-600 bento-title special-font max-w-64">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>    
         <TiLocationArrow className="m-5 scale-[4.5] self-end" /> 
          </div> 
        </BentoTilt>
        
        <BentoTilt className="bento-tilt_2">
         <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="object-cover object-center size-full"
          />
         </BentoTilt> 
        </div>
      </div>
    </section>
  )
}

export default Feautures
