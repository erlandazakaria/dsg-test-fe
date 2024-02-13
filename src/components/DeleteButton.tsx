"use client";

import { Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function DeleteButton({id}: {id: number}) {
    const router = useRouter();

    return (
        <Button onClick={async () => {
            await axios.delete(`http://127.0.0.1/${id}`)
            router.push(`/`)
        }}>Delete</Button>
    );
}