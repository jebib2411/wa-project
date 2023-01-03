const parseOptions2 = (options: string[]) => {
    let nohp = "";
    let nohp2 = ""
  
    options.forEach((options) => {
      if (options.startsWith('nohp=')) {
        nohp = options.split('=')[1].replaceAll('"', '');
      }
      
      if (nohp.startsWith('0')) {
        nohp = "62" + nohp.slice(1) + "@c.us";
      }

      else if (nohp.endsWith('@c.us')) {
        nohp2 = nohp.replaceAll('@c.us', '');
      }
      
    });
  
    return { nohp, nohp2 };
  };
  
  export default parseOptions2;