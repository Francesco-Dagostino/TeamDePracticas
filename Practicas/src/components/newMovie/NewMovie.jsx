import React from 'react'
import { useState } from 'react';

const initialForm = {
    title: '',
    author: '',
    duration: '',
    calification: '',
    imageUrl: '',
    cine: '',
}

const NewMovie = (onSubmit) => {

    const [form, setForm] = useState(initialForm);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [duration, setDuration] = useState('');
    const [calification, setCalification] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [cine, setCine] = useState('');

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    }
    const handleDurationChange = (e) => {
        setDuration(e.target.value);
    }
    const handleCalificationChange = (e) => {
        setCalification(e.target.value);
    }
    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    }
    const handleCineChange = (e) => {
        setCine(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
        setForm(initialForm);

        setAuthor('')
        setImageUrl('')
        setTitle('')
        setCalification('')
        setCine('')

    }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-4 w-96 flex flex-col gap-3"
    >
      <input
        type="text"
        name="title"
        placeholder="Título de la película"
        value={title}
        onChange={handleChangeTitle}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        name="director"
        placeholder="Director de la película"
        value={author}
        onChange={handleAuthorChange}
        className="border p-2 rounded"
        required
      />
      <input
        type="number"
        name="duration"
        placeholder="Duración (minutos)"
        value={duration}
        onChange={handleDurationChange}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        name="rating"
        placeholder="Calificación por edad (ej: ATP, +13, +18)"
        value={calification}
        onChange={handleCalificationChange}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        name="poster"
        placeholder="URL de la imagen / poster"
        value={imageUrl}
        onChange={handleImageUrlChange}
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="cinema"
        placeholder="Cine que la muestra"
        value={cine}
        onChange={handleCineChange}
        className="border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Crear Card
      </button>
    </form>
  )
}

export default NewMovie
