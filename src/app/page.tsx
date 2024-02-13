import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";

export default async function Home() {
  const data = await axios.get("http://127.0.0.1:8080");
  // console.log("ASD", data.data)
  return (
    <Box sx={{width: "100%", height: "100vh"}}>
      <Box sx={{width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Box display="flex" mb={2}>
          <Box display="flex" gap={1}>
            <TextField size="small" />
            <Button variant="contained" size="small">Search</Button>
          </Box>
          <Button variant="contained" size="small" sx={{ml: 2}}>Create New</Button>
        </Box>
        <table>
          <thead>
            <tr>
              <td>Id Produk</td>
              <td>Merek Produk</td>
              <td>Jenis Produk</td>
              <td>Jumlah Stok</td>
              <td>Harga Produk</td>
              <td>Keterangan</td>
              <td>Aksi</td>
            </tr>
          </thead>
          <tbody>
            {data.data.map((d: any) => (
              <tr>
                <td>{d.id}</td>
                <td>{d.merk}</td>
                <td>{d.type}</td>
                <td>{d.stock}</td>
                <td>{d.price}</td>
                <td>{d.note}</td>
                <td>
                  <EditButton id={d.id}/>
                  <DeleteButton id={d.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
}
