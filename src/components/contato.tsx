import React, { useState } from 'react';

export default function Contato() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  // const apiKey = process.env.REACT_APP_SENDGRID_API_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    if (!name) {
      setError('Por favor, insira uma mensagem.');
      return;
    }

    setError('');
    setLoading(true);
    setSuccessMessage('');

    try {
      const response = await fetch('/api/function-1', {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2MTQxMDQ4NDAyODUyMjY4OTc3IiwiZW1haWwiOiJnYWJyaWVsYnp1Y2NvQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoibWZLdGNTR2MxZHRFM0ZHSW5reV9vQSIsIm5iZiI6MTczMjE3MTUzOSwiaWF0IjoxNzMyMTcxODM5LCJleHAiOjE3MzIxNzU0MzksImp0aSI6ImFlMTg5YjllODYyOTEyOGExOTc2NTBiMTUyYTY0ODBmZGY0N2ExZDUifQ.TEB5iFyfczwu_Fgs0XaNch4Dv444bdGt0AF7D1IWcErTtrrcpyBUAzrZVUpzSqVcCzQCJVEr5EuVPqdx1rSYwUsEh_429HVICnrcBsnH1mYy9kNGEfaOk_V0LUC44VZEc37O6GgqnlzGeLcvDgtC10ZJcAYVR0Z7cwA84xmPESOzB3om98Pmktyxmf9fqNkIZEcxsX1HO8KOGNMZe14DWtBYsRMNBauei7U30S4NpwCa2tfD4AAIwbw5ZqXgKE_RJi4ZjD_ObcBejkB48KKP005xw8JlJZCjjtH_NYGxWr9MM5I_BttUZ1ZlVhNXZU3MfqobLqG4DC5rtI2vq12kCA',
        },
        body: JSON.stringify({ toMail: email, name }),
      });

      if (response.ok) {
        setSuccessMessage('E-mail enviado com sucesso! Verifique sua caixa de Spam!');
        setEmail('');
        setName('');
      } else {
        setError('Erro ao enviar e-mail: ${errorData.message || response.statusText}');
      }
    } catch (err) {
      console.error('Erro ao enviar e-mail:', err);
      setError('Erro ao enviar e-mail. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <section id="contact">
    <header>
        <span>
            <p>Um Presente Misterioso!</p>
            <h2>Pacote Gratuíto do Fã</h2>
        </span>
        <p>Caso tenha gostado do projeto, forneça seu nome e e-mail logo abaixo, após pressionar o botão "Gostei do projeto", enviaremos um kit com fotos e vídeos do projeto para que possa verificar de perto.</p>
    </header>
      <form onSubmit={handleSubmit} className="contato-form">
        <div className='telageral'>
        <span>
            <h2>Insira os seus dados 
              para receber o pacote gratuíto</h2>
        </span>
          <span id="campos" className='container'> 
            <input type="email" className='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" required />
            <textarea value={name} className='nome' onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome" required />

            <button type="submit" className='botaoEnviar' disabled={loading}>{loading ? 'Enviando...' : 'Gostei do Projeto!'}</button>
            {error && <p className="error">{error}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
          </span>
        </div>
      </form>
    </section>
  );
}