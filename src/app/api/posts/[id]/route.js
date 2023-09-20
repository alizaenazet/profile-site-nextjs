import Post from "@/models/Post";
import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";

 
export async function GET(request,{params}) {
    const {id} = params;
    try {
        await dbConnect()
        const posts = await Post.findById(id);
        return new NextResponse(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        console.log(error);
        return new NextResponse.json({ message: 'database error' }, { status: 500 })
        
    }
}
 
export async function DELETE(request,{params}) {
    const {id} = params;
    
    try {
        await dbConnect()
        const posts = await Post.findByIdAndDelete(id);
        return new NextResponse("Post deleted", { status: 200 })
    } catch (error) {
        console.log(error);
        return new NextResponse.json({ message: 'database error' }, { status: 500 })
        
    }
}