function insertRow(row) {
    const url = "https://ilzowclnsvabbpwnwkrt.supabase.co/rest/v1/PALETAS";
    const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsem93Y2xuc3ZhYmJwd253a3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMTI2NjQsImV4cCI6MjA1MDg4ODY2NH0.KrPg77Bavax4DgHCpDou4L9XAB41II9_ywNcjy8w6ao";
    const payload = {
      PALETAS: row.PALETAS,
      MATRICULA: row.MATRICULA
    };
  
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": apiKey
      },
      body: JSON.stringify(payload)
    })
      .then(response => console.log(response));
  }