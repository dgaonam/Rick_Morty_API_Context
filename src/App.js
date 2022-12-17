
import { ChakraProvider } from '@chakra-ui/react';

import ListApi from './components/ListApi/ListApi';



function App() {

  return (
      <ChakraProvider>
        
        <ListApi idRequest={[]}/>
        
     </ChakraProvider>
  );
}

export default App;