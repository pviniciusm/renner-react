import { Typography, styled } from "@mui/material";

const RodapeStyled = styled("div")`
    height: 120px;
    background-color: ${(props) => props.theme.palette.primary.main};

    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Rodape = () => {
    return (
        <RodapeStyled>
            <div>
                <Typography variant="subtitle2">E-commerce Renner</Typography>
                <Typography variant="subtitle2">Revisão sobre Redux</Typography>
            </div>
            <div>
                <img src="https://www.growdev.com.br/assets/images/logo_growdev.png" height={30}></img>
            </div>
        </RodapeStyled>
    );
};
