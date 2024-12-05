import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import "./Container.scss";

type ContainerType = {
  children: React.ReactNode;
};

const Container = ( { children } : ContainerType ) => {
  
  return (
    <div className="MainLayout">
      <Nav />
      <main className="Main">
        { children }
      </main>
      <Footer />
    </div>
  )
}

export default Container;