import { Container } from "@mui/material";

export default function Page({ params }: { params: { id: string } }){
    return(

        <Container>Lot {params.id}</Container>
    )
}