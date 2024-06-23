import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, Container, Stack, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, ButtonBase } from '@mui/material';
import { useState } from 'react';

export default function Canister() {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    return (
        <Box id="logoCollection" sx={{ py: 4 }}>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 4, sm: 3 },
                    pb: { xs: 3, sm: 2 },
                }}
            >
                <Stack spacing={3} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                    <Typography
                        variant="h3"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            fontSize: 'clamp(2rem, 10vw, 3rem)',
                            textAlign: 'center',
                            alignSelf: 'center',
                            color: (theme) =>
                                theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                        }}
                    >
                        Canister&nbsp;
                        <Typography
                            component="span"
                            variant="h3"
                            sx={{
                                fontSize: 'clamp(2rem, 10vw, 3rem)',
                                color: '#059212'
                            }}
                        >
                            Token
                        </Typography>
                    </Typography>
                </Stack>

            </Container>
            <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
                <Typography component="h4" variant="h4" color="text.primary" sx={{ lineHeight: '1.3' }}>
                    W2E ( Waste2Earn )- n6j6v-cqaaa-aaaam-acjma-cai <br />
                    wPl ( Waste Plastic ) - mbbnc-biaaa-aaaam-acjiq-cai <br />
                    wPr ( Waste Paper ) - mpdak-2yaaa-aaaam-acjjq-cai <br />
                    wOx ( Waste Organic ) - mug4p-aaaaa-aaaam-acjla-cai <br />
                    wM ( Waste Metal ) - m2erh-3qaaa-aaaam-acjka-cai <br />
                    wG ( Waste Glass ) - m5fxt-wiaaa-aaaam-acjkq-cai <br />
                    eW ( electronic Waste ) - mth23-nyaaa-aaaam-acjlq-cai <br />
                </Typography>
            </Grid>
            <Grid container justifyContent="center" sx={{ mt: 2 }}>

                <Typography component="h2" variant="h2" justifyContent="center">
                    Introducing our Yellow Drum Project
                </Typography>
                <Grid>
                    <Button sx={{
                        borderRadius: "12px",
                        background: "#FFC336",
                        padding: "10px",
                        mt: "2",
                        color: "#FFFFFF",
                        '&:hover': { // Added hover styles
                            backgroundColor: '#F29949', // Change hover background color
                            cursor: 'pointer', // Change cursor to pointer on hover
                        }
                    }} onClick={handleOpenModal}>
                        Click to Know More
                    </Button>
                </Grid>
                {/* Dialog Modal */}
                <Dialog open={openModal} onClose={handleCloseModal}>
                    <DialogTitle style={{ color: '#FFC336' }}>Yellow Drum Project for wOrganic Token</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <h1 style={{ color: '#FFFFFF', lineHeight: '1.2' }}>Welcome to a Greener Tomorrow with Yellow Drum!</h1><br />
                            <h3>A Collaboration for Sustainability</h3> <br />
                            <p style={{ color: '#FFFFFF' }}>The Yellow Drum Project is a proud collaboration between Davao Thermo Biotech Corp,
                                Rotary Club of Downtown Davao, and Waste2Earn by ICPHub. Together, we're committed to
                                transforming organic waste into valuable resources and creating a more sustainable future
                                for Davao City, Philippines</p><br />
                            <h4>What is Yellow Drum?</h4><br />
                            <p style={{ color: '#FFFFFF' }}>The Yellow Drum is your personal composting companion, designed to make organic waste disposal
                                easy and rewarding. By subscribing to the Yellow Drum service, you're not just disposing of waste;
                                you're transforming it into valuable organic fertilizer for your plants and contributing to a
                                healthier environment.</p><br />
                            <h4>What is wOrganic?</h4><br />
                            <p style={{ color: '#FFFFFF' }}>wOrganic is the digital token that powers your Yellow Drum subscription. One wOrganic Token equals
                                one Yellow Drum. By purchasing wOrganic Tokens, you're directly supporting the Yellow Drum Project
                                and its mission to create a more sustainable future.</p><br />
                            <h4>How It Works</h4><br />
                            <ul style={{ listStyleType: 'none', lineHeight: "1.4", color: '#FFFFFF', }}>
                                <li>1. Purchase wOrganic: Acquire wOrganic Tokens on the Waste2Earn platform.</li>
                                <li>2. Receive Your Drum: Exchange your wOrganic Tokens for a Yellow Drum.</li>
                                <li>3. Fill It Up: Collect your organic waste in the Yellow Drum.</li>
                                <li>4. Schedule Collection: When your drum is full, schedule a collection through the Waste2Earn website or app.</li>
                                <li>5. Transform Waste: Davao Thermo Biotech Corp, in partnership with the Rotary Club Downtown Davao, will collect your drum and transform its contents into nutrient-rich organic fertilizer.</li>
                                <li>6. Delivery or Marketplace: Choose to have your fertilizer delivered to you or sell it on our designated Marketplace for additional wOrganic Tokens.</li>
                            </ul>
                            <h4>Your Yellow Drum Menu</h4>
                            <ul style={{ listStyleType: 'none', lineHeight: "1.4", color: '#FFFFFF' }}>
                                <li>* Schedule Collection: Click here to schedule a pick-up for your full Yellow Drum.</li>
                                <li>* Reorder Yellow Drum: Need another drum? Click here to exchange your wOrganic Tokens for a new one.</li>
                                <li>* Purchase wOrganic: Buy wOrganic Tokens to subscribe to the Yellow Drum service or trade on the Marketplace.</li>
                                <li>* Fertilizer Delivery/Marketplace: Choose to have your fertilizer delivered or sell it on the Marketplace.</li>
                                <li>* Contact Us: Have questions or need assistance? Send a message to our dedicated support team directly from this page.</li>
                            </ul>
                            <h4>Events and Activities</h4>
                            <ul style={{ listStyleType: 'none', lineHeight: "1.4", color: '#FFFFFF' }}>
                                <li>* Yellow Drum Launch Event: Stay tuned for details on our upcoming launch event, where you can learn more about the project, meet the team, and get your first Yellow Drum!</li>
                                <li>* Community Composting Workshops: Join us for hands-on workshops on composting and sustainable living. Dates and locations will be announced soon.</li>
                                <li>* Yellow Drum Social Media Contest: Share your Yellow Drum experience on social media for a chance to win wOrganic Tokens and other exciting prizes!</li>
                            </ul>
                            <h4>Follow Us on Social Media</h4>
                            <p style={{ color: '#FFFFFF' }}>Stay connected and get the latest updates on the Yellow Drum Project</p>
                            <h3>Join the Yellow Drum Movement!</h3>
                            <p style={{ color: '#FFFFFF' }}>Together, we can turn waste into wealth and create a cleaner, greener future for Davao City, Philippines</p>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <ButtonBase onClick={handleCloseModal}>Close</ButtonBase>
                    </DialogActions>
                </Dialog>
            </Grid>
        </Box>
    )
}
