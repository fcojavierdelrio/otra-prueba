let supabase;

async function initializeSupabase() {
    const supabaseUrl = "https://ilzowclnsvabbpwnwkrt.supabase.co";
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsem93Y2xuc3ZhYmJwd253a3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMTI2NjQsImV4cCI6MjA1MDg4ODY2NH0.KrPg77Bavax4DgHCpDou4L9XAB41II9_ywNcjy8w6ao'
    supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
    console.log(supabase);
}

async function insertRow(data) {
    return supabase
      .from('PALETAS')
      .insert([
        { PALETAS: data.PALETAS, MATRICULA: data.MATRICULA },
  ])
      .select();
}

window.insertRow = insertRow;
