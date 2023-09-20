import Post from "@/models/Post";
import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";

 
export async function GET(request) {
    const url = new URL(request.url);
    const username = url.searchParams.get("username");
    try {
        await dbConnect()
        
        if (username) {
            console.log("username");
            console.log(username);
            const posts = await Post.find(username && {username});
            console.log("posts");
            console.log(posts);
            return new NextResponse(JSON.stringify(posts), { status: 200 })
        }

        const posts = await Post.find();
        return new NextResponse(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        return new NextResponse.json({ message: 'database error' }, { status: 500 })
        
    }
}
 
export async function POST(request) {
    const body = await request.json();
    const newPost = new Post(body);
    
    try {

        await dbConnect()
        newPost.save()

        return new NextResponse("Post created", { status: 201 })
    } catch (error) {
        return new NextResponse.json({ message: 'database error' }, { status: 500 })
        
    }
}