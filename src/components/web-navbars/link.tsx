import React from 'react'
import Image from 'next/image'
import Card from './card'
import { CardProps, LinkProps } from '../../../type'

type Props = {
    link:LinkProps
}

const Link:React.FC<Props> = ({
  link
}) => {
    
  return (
    <div className='w-full'>
        <div className='flex gap-2 items-center border-neutral-300 border-b-[1px] p-2 my-2'>
          <Image src={link.icon} alt='life' height={28} width={28}/>
          <p className='text-lg'>
            {link.general_title}
          </p>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-2 ">
          {
            link.cards?.map((card:CardProps)=>(
              <Card card={card} key={card.card_title} />
            ))
          }
        </div>
    </div>
  )
}

export default Link