import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="header">
        <div className="container">
          <h2>GL</h2>
          <div className="navegacion">
            <nav>
              <a href="#cabecera">Productos Principales</a>
              <a href="#main">Destacados</a>
              <a href="#sobre-nosotros">Sobre Nosotros</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>
        </div>
      </section>

      <section id="hero">
        <div className="container">
          <h1>GREEN LANDS</h1>
          <p>¡Equípate para tu próxima aventura!</p>
          <button>Explora Equipamiento</button>
        </div>
      </section>

      <section id="cabecera">
          <div className="explora">
            <h2>Explora Nuestro Productos</h2>
          </div>
        <div className="container">
          <div className="cat">
            <h3>Categoria1</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi minima unde at repellendus adipisci? Impedit inventore voluptatum accusantium, iste asperiores quae hic, quos magni nulla earum eveniet repellat alias sapiente.
            </p>
            <button>+ Info</button>
          </div>
          <div className="cat">
            <h3>Categoria2</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi minima unde at repellendus adipisci? Impedit inventore voluptatum accusantium, iste asperiores quae hic, quos magni nulla earum eveniet repellat alias sapiente.</p>
            <button>+ Info</button>
          </div>
          <div className="cat">
            <h3>Categoria3</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi minima unde at repellendus adipisci? Impedit inventore voluptatum accusantium, iste asperiores quae hic, quos magni nulla earum eveniet repellat alias sapiente.</p>
            <button>+ Info</button>
          </div>
        </div>
      </section>

      <section id="main">
        <div className="container">
          <div className="destacados">
            <h2>Destacados</h2>
          </div>
          <div className="equi1">
            <details>
              <summary>Equipamiento 1</summary>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus quae ratione porro et alias.</p>
              
            </details>
            <details>
              <summary>Equipamiento 2</summary>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus quae ratione porro et alias.</p>
            </details>
            <details>
              <summary>Equipamiento 3</summary>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus quae ratione porro et alias.</p>
            </details>
          </div>
          <div className="equi2">
            <h3>Deporte</h3>
            <button>+ Info</button>
          </div>
          <div className="equi3">
            <h3>Deporte</h3>
            <button>+ Info</button>
          </div>
        </div>
      </section>

      <section id="sobre-nosotros">
        <div className="container">
          <h2>Sobre Nosotros</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nam quibusdam harum labore inventore, consectetur quaerat alias placeat iste enim similique id tempora commodi sed quisquam, possimus mollitia itaque in.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus neque facilis, eveniet temporibus delectus fuga esse provident similique, eligendi id quasi. Hic quis quos neque optio delectus beatae enim magnam?</p>
        </div>
      </section>

      <section id="contacto">
        <h2>Contacto</h2>
        <div className="container">
          <div className="card">
            <h3>Email</h3>
            <p>marcoeltonto@tontaco.to</p>
          </div>
          <div className="card">
            <h3>Telefono</h3>
            <p>654321098</p>
          </div>
          <div className="card">
            <h3>Responsable</h3>
            <p>Luis Carlos </p>
          </div>
        </div>
      </section>

      <section id="footer">
        <div className="container">
          <p>&copy;Copyright - 2024</p>
        </div>
      </section>
    </main>
  );
}
