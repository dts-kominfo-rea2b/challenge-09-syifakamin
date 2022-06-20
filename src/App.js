import './App.css';
import Contact from './components/Contact'
import Header from './components/Header'

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (

    // cara 1 (Panggil Manual)

    // <div className="App">
    //   <Header></Header>
    //   <Contact data={contacts[0]} />
    //   <Contact data={contacts[1]} />
    //   <Contact data={contacts[2]} />
    //   <Contact data={contacts[3]} />
    //   <Contact data={contacts[4]} />
    //   <Contact data={contacts[5]} />
    // </div>

    // End Cara 1

    // Cara 2 (Panggil pake Map)

    <div className='App'>
      <div className='Container'>
        <Header></Header>
        <main className='main'>
          {
            contacts.map((contact) => {
              return <Contact data={contact} />
            })
          }
        </main>
      </div>
    </div>

    // End Cara 2
  );
}

export default App;
