"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const EditarNovedad = ({ id }) => {
  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchNovedad = async () => {
      try {
        const response = await fetch(`/api/novedades/${id}`);
        if (!response.ok) throw new Error('Novedad no encontrada');

        const data = await response.json();

        setTitulo(data.TituloNovedad);
        setSubtitulo(data.SubtituloNovedad);
        setTexto(data.TextoNovedad);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);        
      }
    };

    fetchNovedad();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(`/api/novedades/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ TituloNovedad: titulo, SubtituloNovedad: subtitulo, TextoNovedad: texto }),
      });

      if (!response.ok) throw new Error('Error al actualizar la novedad');

      router.push('/novedades'); // Redirige a la lista de novedades
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  if (loading) {
    return <p>Cargando datos ...</p>;
  }
    
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
          <button className="btn btn1 float-start" type="button" onClick={() => router.push('/novedades')}>Volver</button>
          <button className="btn btn2 float-end" type="submit">Guardar</button>
        </div>
      </div>
      {error && <p className="text-danger">{error}</p>}
    </form>
  );
};

export default EditarNovedad;
