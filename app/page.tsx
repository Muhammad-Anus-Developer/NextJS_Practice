"use client"
/* eslint-disable */
import Image from 'next/image'
import CustomButton from "@/components/Buttons";
import Link from "next/link";
import intro from "public/intro.png"
import {motion} from 'framer-motion'
import { useEffect, useRef, useState } from 'react';


const userNames = [
  {
    name: 'MonkeyIslander872',
    src: '/user1.svg'
  },
  {
    name: 'mean_deal_',
    src: '/user2.svg'
  },
  {
    name: 'TennisChallenger',
    src: '/user3.svg'
  },
  {
    name: 'DoozieWoozie',
    src: '/user4.svg'
  },
  {
    name: 'tired0fbeIngWired',
    src: '/user5.svg'
  },
  {
    name: 'Greendragon_',
    src: '/user6.svg'
  },
]


const Index = () => {

  const [activeIndex, setActiveIndex] = useState(-1)

  const targetRef = useRef(null);

  const handleClickOutside = (event) => {
    if (targetRef.current && !targetRef.current.contains(event.target)) {
      setActiveIndex(-1);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function ScrollEffect(e: any): void {
    e.preventDefault();
    const contentElement = document.getElementById("content");
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth" });
    }
  }



  return (
    

    <>
      <main className="min-w-full">


      <motion.div initial={{ x:-100, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: .1 }, x:0 }}  className="pointer-events-none md:block hidden"><Image alt="Upper Frame" loading="lazy" width="923" height="644.19" decoding="async" data-nimg="1" className="pointer-events-none" style={{ color: "transparent" }} src={intro} /></motion.div>


        <div className="md:hidden flex items-center justify-between p-[10px]"><a href="/"><motion.img
                  initial={{ y:50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 0 }, y:0 }} alt="Logo" loading="lazy" width="56" height="56" decoding="async" data-nimg="1" className="pointer-events-none" style={{ color: "transparent" }} src="/Logo.png" /></a>
          <div>

            <motion.button initial={{ y:50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 0 }, y:0 }} className="btn-explore">
              Explore Apps
            </motion.button></div>
        </div>









        <section id="hero" className="w-[90%] mx-auto">
         
         <div className="row mt-5" style={{color:"#E4E4E6"}}>
            <div className="col-md-6 col-xl-5 col-lg-6 flex flex-col align-middle" style={{zIndex:9999999, position:"relative", background:"transparent", paddingBottom:"110px"}}>
            <motion.p initial={{ x: -100, opacity: 0 }} whileInView={{opacity: 'inherit', x: 0, transition: { duration: 1 } }}  style={{color:"#EB3A4A", fontWeight:500, fontSize:12, textTransform:"uppercase"}}>Lorem ipsum dolor</motion.p>

                <motion.p initial={{ x:-100, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: .3 }, x:0 }} className="mt-4 heading text-[#E4E4E7] "></motion.p>

                <motion.p initial={{ x:-100, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: .9 }, x:0 }} className="col-xl-8 mt-4 text-[#CACACE] the_text" style={{fontWeight:300, fontSize:14, lineHeight:"20px", background:"transparent"}}></motion.p>

                <motion.button initial={{ x:-100, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 1.1 }, x:0 }}  className="btn-discord mt-8">Join Discord</motion.button>
            </div>
            
            
            <motion.div initial={{ y:50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 0 }, y:0 }} className="col-md-6 col-xl-7 col-lg-6 overlappingImages" style={{paddingTop:20}}>

<div className="mt-16" style={{width:"100%", display:"flex", justifyContent:"center", background:"transparent"}}>
<motion.img
                  initial={{ y:50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 0.1 }, y:0 }} src="/avatar.png" alt="avatar" width={100} height={100} style={{borderRadius:"50%", background:"transparent", zIndex:99}} />
</div>
  <div className="mt-3" style={{width:"100%", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", background:"transparent"}}>

  <motion.p
                  initial={{ y:50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 0.3 }, y:0 }} style={{fontWeight:400, fontSize:10, margin:3, background:"transparent"}}>User id:</motion.p>
    <motion.p
                  initial={{ y:50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 0.5 }, y:0 }} style={{fontWeight:400, fontSize:14, background:"transparent"}}>XBorg001</motion.p>
  </div>


<div className="flex flex-col justify-center w-[100%] items-center justify-items-center mt-6" style={{ background:"transparent", paddingBottom:50}}>

<motion.div style={{zIndex:999}} className='mx-2 mb-3' initial={{ y:50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 0.7 }, y:0 }} >
      
            <CustomButton style={{width:"48px", height:"48px", display:"flex", justifyContent:"center", alignItems:"center"}} text={<Image src='/group.svg' width={20} height={20} 
  alt="lock" />} />
 </motion.div>

            {/* <CustomButton text={} /> */}
            <motion.div className='bg-transparent'
                  initial={{ y:50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 0.9 }, y:0 }}>

            <CustomButton text="Soulbound Launchpad" />
                  </motion.div>
                  <motion.div
                  initial={{ y:50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 1 }, y:0 }} className="flex justify-items-center mt-3">
            <CustomButton text="Soulbound Launchpad" />
            <CustomButton text="Soulbound Launchpad" />
            </motion.div>
  


</div>




            </motion.div>



         </div>
         <motion.div
                  initial={{ y:50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 1 }, y:0 }}>

         <Link style={{textDecoration:"none"}} href='/#content' onClick={(e) => ScrollEffect(e)} className='scrolldown mt-5 flex flex-col items-center justify-center'>
      <p className='text-gradient text-[.85rem]'>Scroll Down</p>
      <Image
        className='pointer-events-none'
        src="/Vectordown.svg"
        alt="Animate Frame"
        width={25}
        height={50}
        style={{objectFit:"contain"}}
        />
    </Link>
        </motion.div>
                                                  </section>




                                                  <section  id='content' style={{position:'relative'}} className='w-[90%] pt-4 mx-auto min-h-screen relative bg-transparent'>
        <div className='mb-[8vh] bg-transparent' style={{position:'relative'}}>
        <Image
          className='absolute z-[-1] left-[-7%] bg-transparent top-0 pointer-events-none'
          src="/bubble2-1.svg"
          alt="Animate Frame"
          width={90}
          height={90}
          style={{objectFit:"contain",zIndex:9999}}
        />
        <Image
          className='absolute z-[-1] left-0 bg-transparent top-[20%] pointer-events-none'
          src="/bubble2-2.svg"
          alt="Animate Frame"
          width={73}
          height={73}
          style={{objectFit:"contain",zIndex:9999}}
        />
        <motion.div initial={{ opacity: 0, y: 100 }} style={{position:'relative', zIndex:99999}} whileInView={{ opacity: 1, y:0 ,transition:{duration:1}}} className='mt-[20vh] bg-transparent'>
          <h1 className={`font-integral uppercase md:text-[64px] text-[#E4E4E7] bg-transparent text-[40px] leading-[1] break-words mx-auto md:max-w-[750px] text-center`}>The value network of gaming</h1>
          <p className={`text-[14px] leading-[20px] bg-transparent text-[#CACACE] mt-[3vh] mx-auto max-w-[500px] text-center`}>The fundamental protocol that allows anyone to create gaming applications built on top of player identities.</p>
        </motion.div>
        <div className='flex items-center bg-transparent justify-center gap-5 mt-[6vh] flex-wrap' style={{position:'relative', zIndex:99999, padding:'20px'}}>
          <motion.div initial={{ x: -250, opacity:0 }} whileInView={{ x: 0, opacity:1, transition:{duration:1} }} className='rounded-[16px] hover:scale-105 transition-all duration-[350] ease-linear text-white bg-[#090909cc]  card-border sm:min-w-[387px] min-w-[100%] min-h-[244px]' style={{position:'relative', zIndex:99999, padding:"20px"}}>
            <h2 className={` bg-transparent text-[24px] text-[#E4E4E7]`}>Gaming social layer</h2>
            <h2 className={`text-[14px] leading-[20px] text-[#CACACE] mt-[1vh] bg-transparent`}>Gamers take control of their data.</h2>
            <Image
              className='mt-[6vh]  bg-transparent pointer-events-none'
              src="/Home.svg"
              alt="Animate Frame"
              width={72}
              height={88}
              style={{objectFit:"contain"}}
            />
          </motion.div>
          <motion.div  style={{position:'relative', zIndex:99999, padding:'20px'}} initial={{ x: 250, opacity:0 }} whileInView={{ x: 0, opacity:1, transition:{duration:1} }} className='rounded-[16px] hover:scale-105 transition-all duration-[350] ease-linear text-white bg-[#090909cc] card-border sm:min-w-[387px] min-w-[100%] min-h-[244px]'>
            <h2 className={`text-[24px]  bg-transparent text-[#E4E4E7]`}>Gaming social layer</h2>
            <h2 className={`text-[14px]  bg-transparent text-[#CACACE] leading-[20px] text-secondary mt-[1vh]`}>Gamers take control of their data.</h2>
            <Image
              className='mt-[6vh] bg-transparent pointer-events-none'
              src="/star.svg"
              alt="Animate Frame"
              width={88}
              height={88}
              style={{objectFit:"contain"}}
              />
          </motion.div>
        </div>

        <div className='flex items-center justify-center mt-[18vh]  mb-[48vh] flex-wrap relative bg-transparent' style={{zIndex:999}}>
          <div className='md:w-1/2 w-full bg-transparent'>
              <motion.h1
                initial={{ x:-50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 0 }, x:0 }}
                className={`uppercase bg-transparent text-[40px] leading-[1] font-integral text-[#F0F0F0] max-w-[380px]`}>The New Gaming Web</motion.h1>
              <motion.p
                initial={{ x:-50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: .2 }, x:0 }}
                className={`text-[14px] text-[#CACACE] leading-[20px] bg-transparent mt-[3vh] max-w-[380px]`}>At the core of the XBorg Data Graph Protocol lies a dynamic and interconnected network of gaming profiles. Each player's profile is represented as a unique ERC-721 NFT, complete with metadata unique to their gaming journey. </motion.p>
          </div>
          <div className='md:w-1/2 mt-[8vh] md:mt-0 w-full grid sm:grid-cols-2 gap-6 bg-transparent'>
            {
              userNames && userNames.length !== 0 && userNames.map((user, index) => (
                <motion.div
                key={index}
                initial={{ x:50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 0.2 * index }, x:0 }}
                  className={`relative bg-transparent`}>
                  <div           ref={index === activeIndex ? targetRef : null}
 onClick={() => {
                    setActiveIndex((prev) => {
                      if (index === prev) return -1
                      else return index
                    })
                  }} className={index === activeIndex ? "btn_bg button cursor-pointer special-btn reverse flex btn-border items-center relative gap-3 rounded-full " : `button cursor-pointer special-btn reverse flex btn-border items-center relative gap-3 rounded-full `} style={index === activeIndex ? { background: '#eb3a4a80 !important', border: '2px solid #EB3A4A', zIndex: '99' } : {border:'1px solid '}}>
                  <span className="p-[5px] w-[100%] flex items-center bg-transparent gap-3">

                    <Image
                      className='rounded-full pointer-events-none bg-transparent'
                      src={user?.src}
                      alt="Animate Frame"
                      height={64}
                      width={64}
                      style={{objectFit:"cover"}}
                      />
                    <p className="text-[16px] m-0" style={index === activeIndex ? { color: '#EB3A4A', background: 'transparent' } : {background:"transparent", backgroundImage: `linear-gradient(90deg, #1A1A1A 0%, #ABABAB 102.73%),
                   linear-gradient(88.95deg, #FFFFFF 80.46%, rgba(255, 255, 255, 0) 112.56%)`
,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',}}>{user.name}</p>
                  </span>

                  </div>
                  {
                    (index === activeIndex) ? (
                      <div style={{backdropFilter: 'blur(7px)', background:"rgba(9, 9, 9, 0.8)"}} className={`absolute backdrop-blur-md" ${index % 2 === 0 && index === activeIndex ? 'md:left-[-13px] left-[-3%]' : 'md:right-[-13px] right-[-10px]'} top-[-12px] z-10  backdrop-blur-md md:w-[220%] md:min-h-[404px] w-[105%] rounded-[16px] border-solid border-2 border-[#343434] p-[10px]`}>
                        <pre className={`sm:text-[14px] bg-transparent text-[8.7px] mt-[10vh] text-[#95959D] `}>
                          {`
  `}<span className='text-white bg-transparent'>{`player_metadata = {`}</span>{`
    "player_name"`}<span className='text-white bg-transparent'>:</span>{` "JohnDoe123"`}<span className='text-white  bg-transparent'>{`,`}</span>{`
    "gaming_platform"`}<span className='text-white bg-transparent '>:</span>{` "PC"`}<span className='text-white  bg-transparent'>{`,`}</span>{`
    "game_level"`}<span className='text-white bg-transparent'>:</span>{` `}<span className='text-[#EB3A4A]  bg-transparent'>25</span>{`,
    "achievements"`}<span className='text-white bg-transparent'>{`: [`}</span>{`"Master of the Arena", "Legendary Explorer"`}<span className='text-white bg-transparent'>{`],`}</span>{`
    "total_score": `}<span className='text-[#EB3A4A] bg-transparent'>2000</span>{`,
    "preferred_game_mode"`}<span className='text-white bg-transparent'>:</span>{` "Team Deathmatch"`}<span className='text-white  bg-transparent'>{`,`}</span>{`
    "collected items"`}<span className='text-white bg-transparent'>{`: {`}</span>{`
    "weapon"`}<span className='text-white bg-transparent'>:</span>{` "Legendary Sword"`}<span className='text-white  bg-transparent'>{`,`}</span>{`
    "armor"`}<span className='text-white bg-transparent'>:</span>{` "Epic Plate Armor"`}<span className='text-white  bg-transparent'>{`,`}</span>{`
    "pet"`}<span className='text-white bg-transparent'>:</span>{` "Fire Dragon"
    `}<span className='text-white bg-transparent'>{`}`}</span>{`
  `}<span className='text-white bg-transparent'>{`}`}</span>{`
                          `}
                        </pre>
                      </div>
                    ) : ''
                  }
                </motion.div>

              ))
            }
            <div>
            </div>
           
          </div>
          <Image
          className='absolute right-[-5.5%] -z-10 top-[-30vw] pointer-events-none'
          src="/Map0036 1.svg"
          alt="Animate Frame"
          width={1028.07}
          height={1057.74}
          style={{objectFit:"contain"}}
        />
        </div>
        </div>


      </section>














          </main>
          </>
            );
};

            export default Index;
