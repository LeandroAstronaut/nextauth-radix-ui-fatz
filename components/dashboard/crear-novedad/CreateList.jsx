"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateList = () => {
  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('/api/novedades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo, subtitulo, texto }),
      });

      if (!response.ok) {
        throw new Error('Error al crear la novedad');
      }

      //alert('Novedad creada exitosamente');
      setTitulo('');
      setSubtitulo('');
      setTexto('');
      router.push('/novedades');

    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Título</label>
          <input
            type="text"
            className="form-control"
            id="propertyTitle"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
      </div>

      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertySubtitle">Subtítulo</label>
          <input
            type="text"
            className="form-control"
            id="propertySubtitle"
            value={subtitulo}
            onChange={(e) => setSubtitulo(e.target.value)}
          />
        </div>
      </div>

      <div className="col-lg-12">
        <div className="my_profile_setting_textarea">
          <label htmlFor="propertyDescription">Texto</label>
          <textarea
            className="form-control"
            id="propertyDescription"
            rows="7"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button type="button" className="btn btn1 float-start">
            Volver
          </button>
          <button type="submit" className="btn btn2 float-end">
            Guardar
          </button>
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};

export default CreateList;
