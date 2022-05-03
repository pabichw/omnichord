import { Omnichord } from './organisms/omnichord/Omnichord';

import { ThemeProvider } from "styled-components";
import { THEME } from './_settings/_theme';

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <div className="App">
        <Omnichord />
      </div>
    </ThemeProvider>
  );
}

export default App;
