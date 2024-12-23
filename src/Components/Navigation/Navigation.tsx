import { Box } from "../Box";
import CVBox from "../CVBox";
import NavTab from "./NavTab";

export default function Navigation(){
  return <Box tag='nav'>
    <Box className="nav-left items-center">
      <CVBox/>
    </Box>
    <Box className="justify-center nav-center">
      <NavTab text="Home" hashId="/"/>
      <NavTab text="About" hashId="#About"/>
      <NavTab text="Skills" hashId="#Skills"/>
      <NavTab text="Projects" hashId="#Projects"/>
      <NavTab text="Contact" hashId="#Contact"/>
    </Box>
    <Box className="nav-right">
      
    </Box>
  </Box>
}