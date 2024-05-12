import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const logos = [
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];
const logoStyle = {
    width: '100px',
    height: '80px',
    margin: '0 32px',
    opacity: 0.7,
};

export default function LogoCollection() {

    return (
        <Box id="logoCollection" sx={{ py: 4 }}>
            <Typography
                variant="h2"
                align="center"
                color="secondary"
            >
                Partners
            </Typography>
            <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
                {logos.map((logo, index) => (
                    <Grid item key={index}>
                        <img
                            src={logo}
                            alt={`Fake company number ${index + 1}`}
                            style={logoStyle}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}