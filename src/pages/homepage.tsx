import { Box, Typography, TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {ReactComponent as Vodafone} from '../assets/vodafone.svg';
import {ReactComponent as Intel} from '../assets/intel.svg';
import {ReactComponent as Tesla} from '../assets/tesla.svg';
import {ReactComponent as Amd} from '../assets/amd.svg';
import {ReactComponent as Talkit} from '../assets/talkit.svg';
import ExploreCategories from "../components/ExploreCategories";
import {ReactComponent as Desktop} from '../assets/cta.svg';
import {ReactComponent as Vector} from '../assets/Vector.svg';
import FeaturedJobs from "../components/FeaturedJobs";
import JobOpens from "../components/JobOpens";

const Home = () => {
  return (
    <>
    <Box sx={{ textAlign: "start", padding: "20px",paddingBottom:"100px", backgroundColor: "#202430",
       color: "white", paddingLeft: "10%",paddingTop:"80px" }}>
      {/* Heading */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Discover
      </Typography>

      {/* Subheading */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          position: "relative",
          display: "inline-block",
        }}
      >
        more than{" "}
        <Typography
          variant="h2"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "#26A4FF",
          }}
        >
          5000+ Jobs
        </Typography>
        <Vector  />
      </Typography>

      {/* Description */}
      <Typography
        variant="h6"
        sx={{
          color: "silver",
          marginTop: "40px",
        }}
      >
        Great platform for the job seekers that are searching for
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "silver",
        }}
      >
        new career heights and passionate about startups.
      </Typography>

      {/* Search Box */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "30px",
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "8px",
          width: "60%",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        {/* First Search Input */}
        <TextField
          variant="outlined"
          placeholder="Job title or keyword"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            flex: 1,
            marginRight: "10px",
            
          }}
        />

        {/* Second Search Input */}
        <TextField
          variant="outlined"
          placeholder="Florence, Italy"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <ArrowDropDownIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            flex: 1,
            marginRight: "10px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "0px",
            },
          }}
        />

        {/* Search Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4640DE",
            color: "white",
            fontWeight: "bold",
            padding: "13px 20px",
           
            "&:hover": {
              backgroundColor: "#0000FF",
            },
          }}
        >
          Search my job
        </Button>
      </Box>

      {/* Popular Keywords */}
      <Typography
        variant="body1"
        sx={{
          color: "silver",
          marginTop: "20px",
        }}
      >
        Popular: UI designer, UX researchers, Android, Admin
      </Typography>


    </Box>
    <Box sx={{backgroundColor:"#202430",padding:"20px",paddingTop:"50px",paddingY:"50px",borderTop:"1px solid #E5E7EB", paddingX:"10%"}}>
      <Typography
     
        sx={{
          fontWeight: "light",
          marginBottom: "10px",
          color:"silver"
        }}
       >
        Companies we helped grow
        </Typography>
      <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"50px"}}>
        <Vodafone/>
        <Intel/>
        <Tesla/>
        <Amd/>
        <Talkit/>

      </Box>
    </Box>
      <ExploreCategories/>


      <Box
  sx={{
    backgroundColor: "#202430",
    padding: "20px",
    paddingY: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Makes the Box take up the full height of the screen
  }}
>
  <Desktop width={"80%"} />
</Box>

 
      <FeaturedJobs/>

<JobOpens/>
      
      </>
  );
};

export default Home;
