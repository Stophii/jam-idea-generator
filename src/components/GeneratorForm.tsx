import React, { useState } from 'react';
import { generateIdea } from '../generator/ideaGenerator';

export const GeneratorForm: React.FC = () => {
  const [theme, setTheme] = useState('');
  const [genre, setGenre] = useState('');
  const [idea, setIdea] = useState<{ title: string, description: string } | null>(null);

  const handleGenerate = () => {
    const newIdea = generateIdea(theme, genre);
    setIdea(newIdea);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      textAlign: 'center',
    }}>
      <h1>Game Jam Idea Generator</h1>
      <p style={{ maxWidth: '600px' }}>
        Type in the theme of a game jam and select a genre. The game jam generator will give you a creative jump start!
      </p>

      <div style={{ margin: '10px' }}>
        <input
          type="text"
          placeholder="Enter theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
      </div>

      <div style={{ margin: '10px' }}>
        <select
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">-- Select Genre --</option>
          <option value="rpg">RPG</option>
          <option value="rogue-like">Rogue-like</option>
          <option value="rogue-lite">Rogue-lite</option>
          <option value="platformer">Platformer</option>
          <option value="deck builder">Deck Builder</option>
          <option value="simulator">Simulator</option>
          <option value="fighting game">Fighting Game</option>
          <option value="puzzle">Puzzle</option>
          <option value="sandbox">Sandbox</option>
          <option value="fps">FPS</option>
          <option value="survival">Survival</option>
          <option value="mmo">MMO</option>
          <option value="text based">Text Based</option>
          <option value="narrative">Narrative</option>
          <option value="rts">RTS</option>
        </select>
      </div>

      <button onClick={handleGenerate}>Generate Idea</button>

      {idea && (
        <div style={{ marginTop: '20px', maxWidth: '600px' }}>
          <h2>{idea.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: idea.description }} />
        </div>
      )}
    </div>
  );
};
