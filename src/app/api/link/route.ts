import { NextResponse } from 'next/server';
import { db } from '../../../../firebase';
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";

export async function GET(
  req: Request,
) {
  try {
    const querySnapshot = await getDocs(collection(db, "links"));    

    await setDoc(doc(db, "links", "d_f_works"),{
      "general_title":"工作兼职",
      "icon":"/icon/post.png",
      "cards":[
          {
              "card_title":"Linked In",
              "card_desc":"爱尔兰最大的租房买房网站,但是房源很紧张，而且骗子很多!不要先付款！",
              "tags":["工作","全职"],
              "img":"/linked_in.png",
              "url":"https://www.linkedin.com/"
          },
          {
              "card_title":"Indeed",
              "card_desc":"爱尔兰本地的寄宿家庭网站.慎重选择寄宿家庭,很多人都住不长寄宿家庭",
              "tags":["工作","全职"],
              "img":"/indeed.png",
              "url":"https://ie.indeed.com"
             
          },
          {
              "card_title":"麦当劳(学生兼职)",
              "card_desc":"快餐行业的兼职门槛很低,即使英文不太好也可以轻松找到一份兼职",
              "tags":["工作","兼职"],
              "img":"/mc.png",
              "url":"https://www.mcdonalds.com/ie/en-ie/careers.html"
             
          },
          {
              "card_title":"SuperMacs(学生兼职)",
              "card_desc":"爱尔兰本地的一家汉堡店,一直有招人,轻松可以得到这份兼职",
              "tags":["工作","兼职"],
              "img":"/super_macs.png",
              "url":"https://supermacs.ie/careers/"
             
          },
  
      ]
  });

    let links:any = []
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            links.push(doc.data())
    });
     return NextResponse.json(links);
    
  } catch (error) {
    console.log('[STORES_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};