import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'

function App() {
  const [diffContent, setDiffContent] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah halaman refresh saat submit
    setIsLoading(true);
    setError('');
    setResult('');

    try {
      // Kirim request POST ke backend Anda
      // Pastikan URL dan port-nya sesuai dengan server backend Anda
      const response = await axios.post('http://localhost:5000/api/commits/generate', {
        diffContent: diffContent // 'diffContent' harus sama dengan yang diharapkan di backend
      });

      // Simpan pesan dari respons backend ke state 'result'
      setResult(response.data.message);

    } catch (err) {
      // Tangani jika terjadi error
      setError('Gagal menghasilkan pesan. Periksa konsol untuk detail.');
      console.error("Error saat menghubungi backend:", err);
    } finally {
      // Hentikan loading, baik berhasil maupun gagal
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
