"use client"
import { server } from "@/utils/axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Create() {
    const router = useRouter();

    const [merk, setMerk] = useState("");
    const [type, setType] = useState("");
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0);
    const [note, setNote] = useState("");

    return (
        <Box sx={{width: "100%", height: "100vh"}}>
      <Box sx={{width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Box display="flex" mb={2}>Create New</Box>
        <TextField sx={{mb: 1}} placeholder="Merek Produk" value={merk} onChange={(e) => setMerk(e.target.value)} />
        <TextField sx={{mb: 1}} placeholder="Jenis Produk" value={type} onChange={(e) => setType(e.target.value)}  />
        <TextField type="number" sx={{mb: 1}} placeholder="Jumlah Stok" value={stock} onChange={(e) => setStock(Number(e.target.value))}  />
        <TextField type="number" sx={{mb: 1}} placeholder="Harga" value={price} onChange={(e) => setPrice(Number(e.target.value))}  />
        <TextField sx={{mb: 1}} placeholder="Keterangan" value={note} onChange={(e) => setNote(e.target.value)}  />
        <Button 
            variant="contained"
            onClick={async () => {
                await axios.post("http://127.0.0.1:8080", {merk, type, stock, price, note})
                router.push("/")
            }}
        >Create</Button>
      </Box>
    </Box>
    );
}