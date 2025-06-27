import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { logEvent } from '../utils/logger';

const URLForm = ({ token, onShorten }) => {
  const [url, setUrl] = useState('');
  const [validity, setValidity] = useState(30);
  const [shortcode, setShortcode] = useState('');

  const handleSubmit = async () => {
    if (!url) {
      alert("URL is required");
      return;
    }

    await logEvent("frontend", "info", "url-form", "URL submitted by user", token);

    const shortenedData = {
      originalUrl: url,
      shortcode: shortcode || generateShortcode(),
      validity: validity
    };

    onShorten(shortenedData);
    setUrl('');
    setValidity(30);
    setShortcode('');
  };

  const generateShortcode = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  return (
    <Box>
      <Typography variant="h5">Shorten Your URL</Typography>
      <TextField fullWidth label="Original URL" value={url} onChange={e => setUrl(e.target.value)} margin="normal" />
      <TextField fullWidth label="Validity (minutes)" type="number" value={validity} onChange={e => setValidity(e.target.value)} margin="normal" />
      <TextField fullWidth label="Custom Shortcode (optional)" value={shortcode} onChange={e => setShortcode(e.target.value)} margin="normal" />
      <Button variant="contained" onClick={handleSubmit}>Shorten</Button>
    </Box>
  );
};

export default URLForm;