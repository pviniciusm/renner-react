import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Avatar, Badge, IconButton, Toolbar, styled } from "@mui/material";
import { useAppSelector } from "../config/hooks";
import { useNavigate } from "react-router-dom";

const ToolbarStyled = styled(Toolbar)`
    align-items: center;
    justify-content: space-between;

    #logo {
        display: flex;
        align-items: center;

        #logo-name {
            margin-left: 8px;
        }
    }
`;

export const Header = () => {
    const carrinho = useAppSelector((state) => state.carrinho);
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <ToolbarStyled>
                <div id="logo">
                    <Avatar
                        src="https://partnernetwork.vtexassets.com/arquivos/ids/155641/logo_lojasrennerbr.png"
                        sx={{ backgroundColor: "white" }}
                    >
                        Icon
                    </Avatar>
                    <span id="logo-name">Renner</span>
                </div>
                <IconButton onClick={() => navigate("/carrinho")}>
                    <Badge badgeContent={carrinho.length} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </ToolbarStyled>
        </AppBar>
    );
};
