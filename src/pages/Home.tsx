import {
    Box,
    Container,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Typography,
    styled,
} from "@mui/material";
import { ProdutosList } from "../components/ProdutosList";
import { Paginacao } from "../components/Paginacao";

const OutdoorStyled = styled(Paper)`
    background-image: url(${"https://img.lojasrenner.com.br/banner/01-home/P06_240205_HOME_CARROSSEL_BELEZA50OFF_MOB_BELEZA2.jpg"});
    background-size: cover;
    background-position: center;
    background-position-y: -50px;
    height: 200px;
    margin: 20px 0;

    @media screen and (min-width: 400px) {
        background-image: url(${"https://img.lojasrenner.com.br/banner/01-home/P06_240205_HOME_CARROSSEL_BELEZA50OFF_DESK_BELEZA2.jpg"});
        background-position: center;
    }
`;

export const Home = () => {
    return (
        <Container>
            <OutdoorStyled />
            <Divider sx={{ mb: 3 }} />
            <Box display={"flex"} justifyContent={"space-between"}>
                <Typography variant="overline">Produtos</Typography>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Itens por página</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={10}
                        label="Itens por página"
                        sx={{ minWidth: "160px" }}
                        size="small"
                        // onChange={handleChange}
                    >
                        <MenuItem value={10}>5 itens</MenuItem>
                        <MenuItem value={20}>10 itens</MenuItem>
                        <MenuItem value={30}>30 itens</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <ProdutosList />
            <Paginacao />
        </Container>
    );
};
