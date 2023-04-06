import { Header } from './sections/header';
import { Features } from './sections/features';
import { Gallery } from './sections/gallery';
import { WatchBest } from './sections/watchBest';
import { Slider } from './sections/slider';
import { Contact } from './sections/contact';
import { Footer } from './sections/footer';
import { GlobalStyles } from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Slider />
      <Features />
      <Gallery />
      <WatchBest />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
