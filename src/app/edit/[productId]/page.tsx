"use client"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Edit({params}: {params: any}) {
    const router = useRouter();

    const [merk, setMerk] = useState("");
    const [type, setType] = useState("");
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0);
    const [note, setNote] = useState("");

    const fetchUId = async () => {
        console.log("asd", params)
        const result = await axios.get(`http://127.0.0.1:8080/${params.productId}`);
        console.log(result)
        setMerk(result.data.merk)
        setType(result.data.type)
        setStock(result.data.stock)
        setPrice(result.data.price)
        setNote(result.data.note)
    }

    useEffect(() => {
        fetchUId()
    }, [])

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
                await axios.patch(`http://127.0.0.1:8080/${params.productId}`, {merk, type, stock, price, note})
                router.push("/")
            }}
        >EDIT</Button>
      </Box>
    </Box>
    );
}