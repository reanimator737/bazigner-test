import { Header } from './sections/header';
import { Features } from './sections/features';
import { Gallery } from './sections/gallery';
import { WatchBest } from './sections/watchBest';
import { Slider } from './sections/slider';
import { Contact } from './sections/contact';
import { Footer } from './sections/footer';

function App() {
  return (
    <>
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
