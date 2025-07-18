import clientPromise from "@/lib/mondodb"

export async function POST(req) {
 
    


    const body=await req.json()
    const client=await clientPromise

    const db=client.db('bit_tree')
    const collection=db.collection("url")

    const result= await collection.insertOne(body)

  





 return Response.json({ success: true, error: false, message: 'Your Bittree has been generated!', result: result,  })





}