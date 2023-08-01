import {create} from 'zustand'


type Props = {
    show:boolean,
    setShow:()=>void,
  
    
}

const useDrawer = create<Props>(
    (set) => ({
                 show:false,
                 setShow:()=>set((state)=>({show:!state.show}))
        }
    ))

export default useDrawer