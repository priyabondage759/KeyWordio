

import {NavBar} from "./Component/NavBar"
import Home from "./pages/Home"
import CreatePage from "./pages/CreateAds"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Container, Box }  from "@mui/material"
function App() {
  return (
    <>
      <BrowserRouter>
      <Container maxWidth="xl">
      <NavBar/>
      <Box marginTop={3}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreatePage/>}/>

      </Routes>
      </Box>
      </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
