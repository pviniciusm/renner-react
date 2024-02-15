import { Box } from "@mui/material";

export const CarrinhoProduto = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Box display={"flex"} alignItems={"center"}>
                <div>
                    <span>foto do produto</span>
                </div>
                <Box flex={1}>
                    <p>Info do produto</p>
                    <p>Info do produto</p>
                    <p>Info do produto</p>
                </Box>
            </Box>
        </Box>
    );
};
