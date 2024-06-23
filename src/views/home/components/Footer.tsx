import { useState } from 'react';
import Link from '@mui/material/Link';
import { Button, Box, Container, Stack, Dialog, DialogContent, DialogActions, ButtonBase } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import MediumIcon from '@mui/icons-material/Feed';
import DiscordIcon from 'components/Layout/Navbar/icons/Discord';
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import logoDark from "../../../assets/images/logo-dark.svg";


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" mt={1}>
            {'Copyright © '}
            <Link href="https://waste2earn.xyz/">Waste2Earn&nbsp;</Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                py: { xs: 8, sm: 10 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        minWidth: { xs: '100%', sm: '60%' },
                    }}
                >
                    <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
                        <Box sx={{ ml: '-15px' }}>
                            <img src={logoDark} alt="" width="100px" />
                        </Box>
                        <Typography variant="body2" fontWeight={600} gutterBottom>
                            Waste Revalued
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mb={2}>
                            Join the W2E Revolution
                        </Typography>
                        <Stack direction="row" spacing={1} useFlexGap>

                            <Button variant="contained" color="primary" sx={{ flexShrink: 0 }} onClick={handleOpenModal}>
                                Join our Airdrop
                            </Button>
                        </Stack>
                        <Dialog open={openModal} >
                            <DialogContent>
                                <iframe
                                    src="https://forms.gle/A7NUvs66g8NiBTYQ8"
                                    title="Airdrop Whitelisting Forms"
                                    width="100%"
                                    height="600px"
                                    allow="form-fill"
                                />
                            </DialogContent>
                            <DialogActions>
                                <ButtonBase onClick={handleCloseModal}>Close</ButtonBase>
                            </DialogActions>
                        </Dialog>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        Products
                    </Typography>
                    <Link color="text.secondary" href="https://mqvnf-sqaaa-aaaap-ahhpa-cai.icp0.io/">
                        betaWallet
                    </Link>
                    <Link color="text.secondary" href="https://waste2earn.xyz/#/wallet">
                        Wallet v1
                    </Link>
                    <Link color="text.secondary" href="https://waste2earn.xyz/#/swap">
                        Swap
                    </Link>
                    <Link color="text.secondary" href="https://waste2earn.xyz/#/voting">
                        Voting
                    </Link>
                    <Link color="text.secondary" href="https://waste2earn.xyz/#/marketplace/collections">
                        NFT
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        Company
                    </Typography>
                    <Link color="text.secondary" href="https://waste2earn.xyz/#/home">
                        About
                    </Link>
                    <Link color="text.secondary" href="https://waste2earn.xyz/#/home">
                        Home
                    </Link>
                    <Link color="text.secondary" href="https://medium.com/@waste2earn.io">
                        Blog
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        Legal
                    </Typography>
                    <Link color="text.secondary" href="https://waste2earn.gitbook.io/">
                        Terms
                    </Link>
                    <Link color="text.secondary" href="https://waste2earn.gitbook.io/">
                        Privacy
                    </Link>
                    <Link color="text.secondary" href="https://waste2earn.gitbook.io/">
                        Contact
                    </Link>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: { xs: 4, sm: 8 },
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <div>
                    {/* <Link color="text.secondary" href="#">
                        Privacy Policy
                    </Link>
                    <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
                        &nbsp;•&nbsp;
                    </Typography>
                    <Link color="text.secondary" href="#">
                        Terms of Service
                    </Link> */}
                    <Copyright />
                </div>
                <Stack
                    direction="row"
                    justifyContent="left"
                    spacing={1}
                    useFlexGap
                    sx={{
                        color: 'text.secondary',
                    }}
                >
                    <IconButton
                        color="inherit"
                        href="https://t.me/+stHCP7ZCoKcyNWY1"
                        aria-label="Telegram"
                        sx={{ alignSelf: 'center' }}
                    >
                        <TelegramIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://x.com/waste2earn"
                        aria-label="X"
                        sx={{ alignSelf: 'center' }}
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://medium.com/@waste2earn.io"
                        aria-label="Medium"
                        sx={{ alignSelf: 'center' }}
                    >
                        <MediumIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://discord.gg/GbnNzjQe"
                        aria-label="Discord"
                        sx={{ alignSelf: 'center' }}
                    >
                        <DiscordIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://facebook.com/mhokzone/"
                        aria-label=""
                        sx={{ alignSelf: 'center' }}
                    >
                        < FacebookIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Container>
    );
}