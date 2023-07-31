import { NextResponse } from 'next/server';
import { db } from '../../../../firebase';
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";

export async function GET(
  req: Request,
) {
  try {
    const querySnapshot = await getDocs(collection(db, "links"));    
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