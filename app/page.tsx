import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm border-l-4 border-blue-500">
        <h1 className="text-gray-500 text-xs font-bold uppercase mb-2">Recado</h1>
        <p className="text-gray-800 text-lg font-medium">
         Pai e Mãe, obrigado por todo o apoio na vida e por me incentivar a aprender tecnologia. Esse site é um pedacinho do que estou construindo!
        </p>
        <p className="text-gray-400 text-sm mt-4 italic">— joao</p>
      </div>
    </main>
  );
}