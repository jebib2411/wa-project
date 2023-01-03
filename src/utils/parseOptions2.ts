const parseOptions2 = (options: string[]) => {
    let nohp = "6281259348767@c.us";
    let text = "tes";

  
    options.forEach((options) => {
      if (options.startsWith('nohp=')) {
        nohp = options.split('=')[1].replaceAll('"', '');
      }
      
      if (nohp.startsWith('0')) {
        nohp = "62" + nohp.slice(1) + "@c.us";
      }

      else if (options.startsWith('text=')) {
        text = options.split('=')[1].replaceAll('_', ' ');
      }
      
    });
  
    return { nohp, text };
  };
  
  export default parseOptions2;