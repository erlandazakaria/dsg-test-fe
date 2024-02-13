"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function EditButton({id}: {id: number}) {
    const router = useRouter();

    return (
        <Button onClick={() => router.push(`edit/${id}`)}>Edit</Button>
    );
}