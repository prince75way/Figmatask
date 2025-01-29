import {
  Box,
  Container,
  Grid,
  Typography,

  TextField,
  Button,
  IconButton,

} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ReactComponent as Logo } from "../../assets/logo.svg";



const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#202430", color: "white", py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <Logo />
              <Typography variant="h6" sx={{ color: "white" }}>
                JobHuntly
              </Typography>
            </Box>
            <Typography variant="body2" color="grey.400" sx={{ mb: 3 }}>
              Great platform for job seekers passionate about startups. Find
              your dream job easier with JobHuntly.
            </Typography>
          </Grid>

          {/* About Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 2, color: "white" }}>
              About
            </Typography>
            <Box display="flex" flexDirection="column" gap={3}>
              <Typography sx={{'color':"silver",fontSize:"small",fontWeight:"lighter"}}>Companies</Typography>
              <Typography sx={{'color':"silver",fontSize:"small",fontWeight:"lighter"}}>Pricing</Typography>
              <Typography sx={{'color':"silver",fontSize:"small",fontWeight:"lighter"}}>Terms</Typography>
              <Typography sx={{'color':"silver",fontSize:"small",fontWeight:"lighter"}}>Advice</Typography>
              <Typography sx={{'color':"silver",fontSize:"small",fontWeight:"lighter"}}>Privacy Policy</Typography>
            </Box>
          </Grid>

          {/* Resources Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 2, color: "white" }}>
              Resources
            </Typography>
            <Box display="flex" flexDirection="column" gap={3}>
              <Typography sx={{'color':"silver",fontSize:"small",fontWeight:"lighter"}}>Help Docs</Typography>
              <Typography sx={{'color':"silver",fontSize:"small",fontWeight:"lighter"}}>Guide</Typography>
              <Typography sx={{'color':"silver",fontSize:"small",fontWeight:"lighter"}}>Updates</Typography>
              <Typography sx={{'color':"silver",fontSize:"small",fontWeight:"lighter"}}>Contact Us</Typography>
            </Box>
          </Grid>

          {/* Newsletter Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, color: "white" }}>
              Get job notifications
            </Typography>
            <Typography variant="body2" color="grey.400" sx={{ mb: 2 }}>
              The latest job news and articles, sent to your inbox weekly.
            </Typography>
            <Box display="flex" gap={1}>
              <TextField
                size="small"
                placeholder="Email Address"
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  flex: 1,
                }}
              />
              <Button
                variant="contained"
                sx={{
                  whiteSpace: "nowrap",
                  backgroundColor: "#4640DE",
                  px: 4,
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: 1,
            borderColor: "grey.800",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" color="grey.400">
            2021 © JobHuntly. All rights reserved.
          </Typography>
          <Box display="flex" gap={2}>
            <IconButton
              size="small"
              sx={{
                bgcolor: "#413f3f", // Silver background
                color: "white",
                borderRadius: "50%",
                "&:hover": { bgcolor: "#B0B0B0" }, // Slightly darker on hover
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                bgcolor: "#413f3f",
                color: "white",
                borderRadius: "50%",
                "&:hover": { bgcolor: "#B0B0B0" },
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                bgcolor: "#413f3f",
                color: "white",
                borderRadius: "50%",
                "&:hover": { bgcolor: "#B0B0B0" },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                bgcolor: "#413f3f",
                color: "white",
                borderRadius: "50%",
                "&:hover": { bgcolor: "#B0B0B0" },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                bgcolor: "#413f3f",
                color: "white",
                borderRadius: "50%",
                "&:hover": { bgcolor: "#B0B0B0" },
              }}
            >
              <TwitterIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
