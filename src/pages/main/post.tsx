import {
    addDoc,
    getDocs,
    collection,
    query,
    where,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../config/firebase";
import { Post as IPost } from "./main";

interface Props {
    post: IPost;
}

export const Post = (props: Props) => {
    const { post } = props;
    const [user] = useAuthState(auth);

    return (
        <div>
            <div className="title">
                <h1> {post.title}</h1>
            </div>
            <div className="body">
                <p> {post.description} </p>
            </div>
        </div>
    );
};