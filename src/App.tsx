import { Header } from './sections/header';
import { Features } from './sections/features';
import { Gallery } from './sections/gallery';
import { WatchBest } from './sections/watchBest';
import { Slider } from './sections/slider';
import { Contact } from './sections/contact';
import { Footer } from './sections/footer';
import { GlobalStyles } from './globalStyles';
import { BlueDivider, WhiteDivider } from '~/components/dividers/style';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Slider />
      <BlueDivider />
      <Features />
      <Gallery />
      <WatchBest />
      <WhiteDivider />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
