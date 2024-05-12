import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


export default function Footer() {
    return (

        <Container
            sx={{
                py: 3,
                mt: 'auto',
            }}
        >

            <Typography variant="h4" color="secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://waste2earn.xyz/">
                    Waste2Earn&nbsp;
                </Link>
                2024
            </Typography>
        </Container>
    );
}