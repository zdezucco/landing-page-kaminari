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
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2MTQxMDQ4NDAyODUyMjY4OTc3IiwiZW1haWwiOiJnYWJyaWVsYnp1Y2NvQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiV1ZVdUNtSDBUd0RFaUhJSzBSWTQ4ZyIsIm5iZiI6MTczMjIyODEyOCwiaWF0IjoxNzMyMjI4NDI4LCJleHAiOjE3MzIyMzIwMjgsImp0aSI6Ijk5ODA3ZDUwYTJiM2UwZGNmYTM3OGYyOGY1MjIyOTRkM2JiNWQ0MGMifQ.dH9WlaVsdqJ3OgAEkYPYTtYbSznFVUvzRo3-d2rmA55suCc-f8TFS02zZVokZBgRTjNV2_ea0uRc6iDduyDhvH7rUpCc3uEFwEVPk02US1RqTZhJcvn2ALMvFJwMxRe8P3pE5hpIfxEyLdP2qTJHBy0f-iqH44I_wpEpwNH_8NcT7QfAdvKle95qJbPeD2gaJz1V2rERa1_VfYGCJX34ypj4XN9zPH_xUC-f7ww_MmgwzzrEpKpARvxszhvNWJqeCbvKpmQWjM4IwREj3UKpaZuI3m_xN3S8vr9qjZZR5ZPy_lxSt3PCdQmyDvDqJLwjVl6bMj8hZnw9pyc-mtbHbw',
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
            <input value={name} className='nome' onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome" required />

            <button type="submit" className='botaoEnviar' disabled={loading}>{loading ? 'Enviando...' : 'Gostei do Projeto!'}</button>
            {error && <p className="error">{error}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
          </span>
        </div>
      </form>
    </section>
  );
}