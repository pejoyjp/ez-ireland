import React from 'react'
import {BsDroplet} from 'react-icons/bs'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import { CardProps } from '../../../type'


type Props = {
  card:CardProps
}

const Card:React.FC<Props> = ({card}) => {
  const router = useRouter()
  const goToLink = (url:string)=>{
    router.push(url)
 }
  return (
      <div  onClick={()=>goToLink(card.url)}
                  className='bg-white  p-2 m-2 justify-center items-center rounded-md shadow-md cursor-pointer flex text-neutral-700 overflow-hidden hover:bg-slate-100 '
      > 
          <Image src={card.img} alt='' width={40} height={40} className='p-1'/>

          <div>
            <div className='flex justify-center items-start flex-col px-1'>
              <p className='font-bold text-neutral-900 text-md md:text-lg'>
                {card.card_title}
              </p>
              <p className='hidden md:block text-sm md:text-md'>
                {card.card_desc.substring(0, 25)}...
              </p>
            </div>
          </div>
          
        </div> 
  )
}

export default Card